import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'devices',
    canLoad: [AuthGuard],
    loadChildren: './devices/devices.module#DevicesModule'
  },
  {
    path: 'warehouse',
    canLoad: [AuthGuard],
    loadChildren: './warehouse/warehouse.module#WarehouseModule'
  },
  {
    path: 'customers',
    canLoad: [AuthGuard],
    loadChildren: './customers/customers.module#CustomersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
