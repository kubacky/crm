import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'crm-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.scss']
})
export class DeviceDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeviceDialogComponent>
  ) { }

  ngOnInit() {
  }

  onCancel(canceled: boolean): void {
    this.dialogRef.close(canceled);
  }

  onSave(saved: any): void {
    this.dialogRef.close(saved);
  }

}
