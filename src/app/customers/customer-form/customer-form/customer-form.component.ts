import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { MatSnackBar } from '@angular/material';
import { CustomerNameValidator } from 'src/app/validators/customer-name-validator';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;

  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private matSnackBar: MatSnackBar,
    private nameValidator: CustomerNameValidator
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)], this.nameValidator.validate.bind(this.nameValidator)],
      groups: this.fb.array([]),
      alias: '',
      discount: '',
      taxNo: '',
      phone: '',
      mail: '',
      branches: this.fb.array([])
    })
  }

  save(): void {
    let form = this.form.value;

    this.customersService.create(form).subscribe(
      res => {
        if (res.status === 'OK') {
          this.success(res.customer);
        }
      }
    )
  }

  private success(createdCustomer: Customer): void {

    this.customersService.selectedCustomer.next(createdCustomer);
    this.matSnackBar.open('Zapisano dane klienta', 'X', {
      duration: 300
    });
    this.saved.emit(createdCustomer);
  }

  cancel(): void {
    this.canceled.emit(true);
  }
}