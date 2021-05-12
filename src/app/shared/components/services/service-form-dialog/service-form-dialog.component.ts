import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Technician } from 'src/app/interfaces/technician';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-service-form-dialog',
  templateUrl: './service-form-dialog.component.html',
  styleUrls: ['./service-form-dialog.component.scss']
})
export class ServiceFormDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  technicians: Technician[];
  today: any;
  title: string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ServiceFormDialogComponent>,

    private servicesService: ServicesService,
    private fb: FormBuilder
  ) {
    this.today = new Date();
  }

  ngOnInit() {
    this.getTechniciansAndBuildForm();
    this.title = this.getTitleString();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private getTechniciansAndBuildForm(): void {
    const sub = this.servicesService.getTechnicians().subscribe(
      technicians => {
        this.technicians = technicians;
        this.buildForm();
      }
    )
    this.subscriptions.add(sub);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      devices: this.getDevicesString(),
      date: ['', Validators.required],
      type: ['1', Validators.required],
      status: ['2', Validators.required],
      price: '',
      technicianId: ['', Validators.required],
      comment: ''
    });

    this.checkIfIsEdited();
  }

  private checkIfIsEdited(): void {
    if (this.data.serviceId) {
      const ctrl = this.fb.control(this.data.serviceId);

      this.form.addControl('id', ctrl);
    }
  }

  private getDevicesString(): string {
    return this.data.devices
      .map(device => device.id + ':' + device.customerId)
      .reduce((prev, next) => prev + '|' + next);
  }

  private getTitleString(): string {

    let title: string = 'Serwis ';

    title += (this.data.devices.length === 1) ? 'produktu: ' : 'produktów: ';

    title += this.data.devices
      .map(device => device.registryNo)
      .reduce((prev, next) => prev + ', ' + next);
    return title;
  }

  save(): void {
    let service = this.form.value;

    this.servicesService.saveService(service).subscribe(
      res => this.handleResponse(res)
    )
  }

  private handleResponse(response: any): void {
    if (response.status === 'OK') {
      this.dialogRef.close();
      //to do: updating all devices (without data reload)
    }
    else {
      //to do: error handling
    }
  }

}
