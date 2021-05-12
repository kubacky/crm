import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerEditComponent } from 'src/app/customers/views/customer-edit/customer-edit.component';
import { CustomersIndexComponent } from 'src/app/customers/views/customers-index/customers-index.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: '',
        component: CustomersIndexComponent
      },

      {
        path: 'create',
        component: CustomerEditComponent
      },
      {
        path: 'edit/:id',
        component: CustomerEditComponent
      },
      {
        path: 'view/:id',
        component: ViewCustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
