import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse.component';
import { WarehouseIndexComponent } from './views/warehouse-index/warehouse-index.component';
import { CoreModule } from '../core/core.module';
import { WarehouseRoutingModule } from 'src/app/warehouse/warehouse-routing.module';

@NgModule({
  declarations: [WarehouseComponent, WarehouseIndexComponent],
  imports: [
    CommonModule,
    CoreModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
