import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import { MatDialog } from '@angular/material';
import { DeviceQuickViewDialogComponent } from 'src/app/devices/components/device-quick-view-dialog/device-quick-view-dialog.component';
import { ServiceFormDialogComponent } from 'src/app/shared/components/services/service-form-dialog/service-form-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-details-button',
  templateUrl: './device-details-button.component.html',
  styleUrls: ['./device-details-button.component.scss']
})
export class DeviceDetailsButtonComponent implements OnInit {

  @Input() device: Device;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  createService(): void {

    let devs = [];
    devs.push(this.device);

    let config = {
      data: {
        devices: devs
      }
    }
    
    this.dialog.open(ServiceFormDialogComponent, config)
  }

  quickView(): void {
    this.dialog.open(DeviceQuickViewDialogComponent, {
      data: this.device
    })
  }
  


}
