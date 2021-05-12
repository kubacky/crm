import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/interfaces/service';

@Component({
  selector: 'crm-edit-service',
  template: ''
})
export class EditServiceComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  @Input() form: FormGroup;

  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.checkIfIsEdited()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private checkIfIsEdited(): void {
    if (this.form.contains('id')) {
      const id = this.form.get('id').value;

      this.getService(id);
    }
  }

  private getService(serviceId: number): void {
    const sub = this.servicesService.getService(serviceId).subscribe(
      service => this.setFormValues(service)
    )

    this.subscription.add(sub);
  }

  private setFormValues(service: Service): void {
    this.form.get('date').setValue(service.isoDate);
    this.form.get('status').setValue(service.statusId);
    this.form.get('type').setValue(service.typeId);
    this.form.get('price').setValue(service.price);
    this.form.get('technicianId').setValue(service.technicianId);
    this.form.get('comment').setValue(service.comment);
  }
}
