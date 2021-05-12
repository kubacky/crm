import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { CustomerDialogComponent } from 'src/app/customers/views/customer-dialog/customer-dialog.component';

@Component({
  selector: 'crm-new-customer-button',
  templateUrl: './new-customer-button.component.html',
  styleUrls: ['./new-customer-button.component.scss']
})
export class NewCustomerButtonComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();
  @Output() result: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  createCustomer(): void {
    const dr = this.dialog.open(CustomerDialogComponent, {})

    const sub = dr.afterClosed().subscribe(
      res => this.result.emit(res)
    )

    this.subscriptions.add(sub);
  }
}
