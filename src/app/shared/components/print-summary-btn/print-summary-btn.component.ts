import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'crm-print-summary-btn',
  templateUrl: './print-summary-btn.component.html',
  styleUrls: ['./print-summary-btn.component.scss']
})
export class PrintSummaryBtnComponent implements OnInit {

  selection: SelectionModel<Customer>;

  constructor(
    private customersService: CustomersService
  ) { 
    this.selection = this.customersService.selection;
  }

  ngOnInit() {
  }

}
