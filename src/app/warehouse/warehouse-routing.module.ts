import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseComponent } from 'src/app/warehouse/warehouse.component';
import { WarehouseIndexComponent } from 'src/app/warehouse/views/warehouse-index/warehouse-index.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    children: [
      {
        path: '',
        component: WarehouseIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
