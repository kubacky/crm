import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ServiceFormDialogComponent } from '../service-form-dialog/service-form-dialog.component';
import { Device } from 'src/app/interfaces/device';

@Component({
  selector: 'crm-add-service-btn',
  templateUrl: './add-service-btn.component.html',
  styleUrls: ['./add-service-btn.component.scss']
})
export class AddServiceBtnComponent {

  @Input() devices: Device[];
  @Input() view: 'compact' | 'full';

  constructor(
    private dialog: MatDialog
  ) {
  }

  addService(): void {
    let config = {
      data: {
        devices: this.devices,
        serviceId: false
      }
    };

    this.dialog.open(
      ServiceFormDialogComponent,
      config
    )
  }
}
