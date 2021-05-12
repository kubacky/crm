import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CoreModule } from '../core/core.module';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from 'src/app/customers/customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersIndexComponent } from './views/customers-index/customers-index.component';
import { CustomerFormModule } from 'src/app/customers/customer-form/customer-form.module';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { DeviceDialogComponent } from '../devices/device-form/device-dialog/device-dialog.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';
import { DeviceFormModule } from '../devices/device-form/device-form.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerEditComponent,
    CustomersIndexComponent,
    CustomersListComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CoreModule,
    SharedModule,
    CustomerFormModule,
    DeviceFormModule
  ],
  entryComponents: [
    DeviceDialogComponent
  ],
  providers: []
})
export class CustomersModule { }
