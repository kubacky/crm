import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BranchesFormComponent } from './branches-form/branches-form.component';
import { CoreModule } from '../../core/core.module';
import { GroupsService } from 'src/app/services/groups.service';
import { NewCustomerButtonComponent } from './new-customer-button/new-customer-button.component';
import { CustomerDialogComponent } from 'src/app/customers/views/customer-dialog/customer-dialog.component';
import { GroupsFormComponent } from './groups-form/groups-form.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    NewCustomerButtonComponent,
    CustomerDialogComponent,
    CustomerFormComponent,
    AddressFormComponent,
    ContactFormComponent,
    BranchesFormComponent,
    GroupsFormComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    NewCustomerButtonComponent,
    CustomerDialogComponent,
    CustomerFormComponent,
    AddressFormComponent,
    ContactFormComponent,
    BranchesFormComponent,
    CustomerEditComponent
  ],
  providers: [
    GroupsService
  ]
})
export class CustomerFormModule { }
