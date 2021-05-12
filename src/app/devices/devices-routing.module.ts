import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from 'src/app/devices/devices.component';
import { DevicesIndexComponent } from 'src/app/devices/views/devices-index/devices-index.component';
import { DeviceEditComponent } from 'src/app/devices/views/device-edit/device-edit.component';
import { ViewDeviceComponent } from './views/view-device/view-device.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    children: [
      {
        path: '',
        component: DevicesIndexComponent
      },
      {
        path: 'create',
        component: DeviceEditComponent
      },
      {
        path: 'edit/:id',
        component: DeviceEditComponent
      },
      {
        path: 'view/:id',
        component: ViewDeviceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
