import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/interfaces/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/services/devices.service';
import { Subscription } from 'rxjs';
import { RegistryNumberValidator } from 'src/app/validators/registry-number-validator';
import { MatSnackBar } from '@angular/material';
import { Device } from 'src/app/interfaces/device';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  customers: Customer[];
  private subscriptions: Subscription = new Subscription();

  @Input() lockCustomer: boolean = false;
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private numberValidator: RegistryNumberValidator,
    private customersService: CustomersService,
    private devicesService: DevicesService,
    private snackBar: MatSnackBar
  ) {
    this.watchSelectedCustomer();
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  buildForm(): void {
    this.form = this.fb.group({
      registryNo: ['',
        [Validators.required, Validators.minLength(3)],
        [this.numberValidator.validate.bind(this.numberValidator)]],
      customerId: [0, Validators.required],
      servicePeriod: ['', Validators.required],
      price: '',
      purchaseDate: '',
      lastService: '',
      comment: '',
      properties: this.fb.group({})
    })
  }

  private watchSelectedCustomer(): void {
    const sub = this.customersService.selectedCustomer.subscribe(
      customer => this.form.get('customerId').setValue(customer.id)
    )

    this.subscriptions.add(sub);
  }

  save(): void {
    let device = this.form.value;

    this.devicesService.saveDevice(device).subscribe(
      res => {
        if (res.status === 'OK') {
          this.success(res, device);
        }
      }
    )
  }

  private success(res: any, device: Device) {
    this.snackBar.open(`Zapisano dane urządzenia ${res.device.registryNo}`, 'X', { duration: 1000 });
    this.saved.emit(device);
  }

  cancel(): void {
    this.canceled.emit(true);
  }
}
