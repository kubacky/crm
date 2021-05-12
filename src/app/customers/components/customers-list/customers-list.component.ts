import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, AfterViewInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Customer } from '../../../interfaces/customer';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, OnDestroy, AfterViewInit {

  spinner: boolean = true;

  columns: string[] = ['select', 'menu', 'name', 'city'];

  customers: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  groups: any[];
  provinces: any[];

  private subscriptions: Subscription = new Subscription();
  selection: SelectionModel<Customer>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {
    this.customers = this.customersService.customers;
    this.selection = this.customersService.selection;
  }

  ngOnInit() {
    this.getCustomers();
  }

  ngOnDestroy() {
    this.customersService.customers.data = [];
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit() {
    this.customersService.customers.sort = this.sort;
    this.customersService.customers.paginator = this.paginator;
  }

  private getCustomers(): void {
    const sub = this.customersService.getCustomers()
      .subscribe(
        customers => this.customersService.customers.data = customers
      )

    this.subscriptions.add(sub);
  }

  viewCustomer(customerId: number): void {
    this.router.navigate([`customers/view/${customerId}`])
  }

  selectRow(member: any): void {
    this.customersService.selection.toggle(member);
  }

  clearSelection(): void {
    this.customersService.selection.clear();
  }
}
