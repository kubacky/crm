import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'crm-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit, OnDestroy {

  customer: Customer;
  sourceId: number;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.getRouteParams();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getRouteParams(): void {
    let sub = this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('id'));
        this.sourceId = id;
        this.getCustomer(id);
      }
    )

    this.subscriptions.add(sub);
  }

  private getCustomer(customerId: number): void {
    let sub = this.customersService.getCustomer(customerId).subscribe(
      customer => {
        this.customer = customer;
        this.setCoordinates();
      }
    )

    this.subscriptions.add(sub);
  }

  private setCoordinates(): void {
    this.customer.address.lat = Number(this.customer.address.lat);
    this.customer.address.lng = Number(this.customer.address.lng)
  }
}
