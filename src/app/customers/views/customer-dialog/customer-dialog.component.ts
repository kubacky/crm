import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'crm-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>
  ) { }

  ngOnInit() {
  }

  onCancel(canceled: boolean): void{
    this.dialogRef.close(canceled);
  }

  onSave(saved: any): void {
    this.dialogRef.close(saved);
  }
}
