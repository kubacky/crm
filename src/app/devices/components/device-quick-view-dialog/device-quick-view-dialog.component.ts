import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/interfaces/device';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-quick-view-dialog',
  templateUrl: './device-quick-view-dialog.component.html',
  styleUrls: ['./device-quick-view-dialog.component.scss']
})
export class DeviceQuickViewDialogComponent implements OnInit {

  device: Device; 

  constructor(
    @Inject(MAT_DIALOG_DATA) private deviceId: any,
    private devicesService: DevicesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getDevice();
  }

  getDevice(): void {
    this.devicesService.getDevice(this.deviceId).subscribe(
      device => {
        this.device = device;
        this.cdr.markForCheck();
      }
    )
  }

}
