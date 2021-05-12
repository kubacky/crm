import { Component, OnInit, OnDestroy, Input, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize, filter } from 'rxjs/operators';
import { CustomersService } from 'src/app/services/customers.service';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-customer-autocomplete',
  templateUrl: './customer-autocomplete.component.html',
  styleUrls: ['./customer-autocomplete.component.scss']
})
export class CustomerAutocompleteComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() placeholder: string;
  @Input() customer: Customer;

  customers: Customer[] = [];
  form: FormGroup;
  spinner: boolean = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private customersService: CustomersService
  ) {
    this.watchSelectedCustomer();
  }

  ngOnInit() {
    this.buildForm();
    this.getCustomers();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  ngAfterViewInit(): void {
    if (this.customer) {
      this.form.get('query').setValue(this.customer.name)
    }
  }

  buildForm(): void {
    this.form = this.fb.group({
      query: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  getCustomers(): void {
    const sub = this.form.get('query')
      .valueChanges
      .pipe(
      tap(() => this.spinner = true),
      filter(value => value.length > 2),
      debounceTime(300),
      switchMap(value => this.customersService.find(value)
        .pipe(
        finalize(() => {
          this.spinner = false;
          this.cdr.markForCheck();
        })
        ))
      )
      .subscribe(customers => this.customers = customers);

    this.subscriptions.add(sub);
  }

  onOptionSelected(event): void {
    this.customersService.selectedCustomer.next(event.option.value);
  }

  private watchSelectedCustomer(): void {
    const sub = this.customersService.selectedCustomer.subscribe(
      customer => this.form.get('query').setValue(customer)
    )

    this.subscriptions.add(sub);
  }

  displayWithFn(customer: Customer): string {
    if (customer) {
      return customer.name
    }
  }
}
