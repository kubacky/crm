import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Customer } from 'src/app/interfaces/customer';
import { AddressesService } from 'src/app/services/addresses.service';
import { forkJoin, Subscription } from 'rxjs';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-customers-index',
  templateUrl: './customers-index.component.html',
  styleUrls: ['./customers-index.component.scss']
})
export class CustomersIndexComponent implements OnInit, OnDestroy {

  selection: SelectionModel<Customer>

  groups: any[];
  provinces: any[];
  @ViewChild('groupsList') groupsList: any;
  @ViewChild('provincesList') provincesList: any;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private customersService: CustomersService,
    private addressesService: AddressesService,
    private groupsService: GroupsService
  ) {
    this.selection = this.customersService.selection;
  }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private getData(): void {
    const sub = forkJoin(
      this.groupsService.getGroups('customer'),
      this.addressesService.getProvinces()
    ).subscribe(([groups, provinces]) => {
      this.groups = groups;
      this.provinces = provinces;
    })

    this.subscriptions.add(sub);
  }

  applyFilter(query: string): void {
    this.customersService.applyFilter(query);
  }

  selectCategory(categoryRef: any, type: string): void {
    setTimeout(() => this.parseCategoriesString(categoryRef, type), 500);
  }

  private parseCategoriesString(categoryRef: any, type: string) {

    let selected = categoryRef.selectedOptions.selected;

    if (selected.length > 0) {
      selected = selected
        .map(element => element.value)
        .reduce((prev, next) => prev + '_' + next);

      this.getSelectedCategories(type, selected)
    }
    else {
      this.getCustomers();
    }

    this.customersService.selection.clear();
  }

  private getCustomers(): void {
    const sub = this.customersService.getCustomers().subscribe(
      customers => this.customersService.customers.data = customers
    )

    this.subscriptions.add(sub);
  }

  private getSelectedCategories(type: string, selected: string): void {
    const sub = this.customersService.getByCategory(type, selected).subscribe(
      customers => this.customersService.customers.data = customers
    )

    this.subscriptions.add(sub);
  }
}
