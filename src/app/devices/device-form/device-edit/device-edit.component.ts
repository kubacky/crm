import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { RegistryNumberValidator } from 'src/app/validators/registry-number-validator';
import { CustomersService } from 'src/app/services/customers.service';

/**
 * Retrieves device data (when is edited) and modifies the form by setting device values. It also replaces registry number validator
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-edit',
  template: '',
})
export class DeviceEditComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService,
    private customersService: CustomersService,
    private numberValidator: RegistryNumberValidator
  ) { }

  ngOnInit() {
    this.getRouteParams();
  }

  ngOnDestroy() {
    this.numberValidator.clearDeviceId();
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('id'));
        if (id) {
          this.getDevice(id)
        }
      }
    )
  }

  getDevice(deviceId: number): void {
    this.devicesService.getDevice(deviceId).subscribe(
      device => this.setFormValues(device)
    )
  }

  setFormValues(device: any): void {
    this.assignIdToForm(device.id);
    this.setRegistryNo(device);

    this.customersService.selectedCustomer.next(device.customer);
    this.form.get('servicePeriod').setValue(device.servicePeriod);
    this.form.get('price').setValue(device.price);
    this.form.get('purchaseDate').setValue(device.purchaseDate);
    this.form.get('lastService').setValue(device.lastIsoDate);
    this.form.get('comment').setValue(device.comment);

    this.setPropertyValues(device.properties);
  }

  assignIdToForm(deviceId: any): void {
    const ctrl = new FormControl(deviceId);

    this.form.addControl('id', ctrl);
  }

  setPropertyValues(properties: any): void {
    properties.forEach(property => this.form.get('properties')
      .get(property.propertyId)
      .setValue(property.valueId))
  }

  setRegistryNo(device: any): void {
    this.numberValidator.setDeviceId(device.id);
    this.form.get('registryNo').setValue(device.registryNo);
  }
}
