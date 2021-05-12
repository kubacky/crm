import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DevicesIndexComponent } from './views/devices-index/devices-index.component';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesService } from 'src/app/services/devices.service';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistryNumberValidator } from 'src/app/validators/registry-number-validator';
import { CustomerDialogComponent } from 'src/app/customers/views/customer-dialog/customer-dialog.component';
import { CustomerFormModule } from 'src/app/customers/customer-form/customer-form.module';
import { DeviceDetailsButtonComponent } from './components/device-details-button/device-details-button.component';
import { DeviceQuickViewDialogComponent } from './components/device-quick-view-dialog/device-quick-view-dialog.component';
import { DeviceFormModule } from 'src/app/devices/device-form/device-form.module';
import { ViewDeviceComponent } from './views/view-device/view-device.component';
import { ServiceFormDialogComponent } from '../shared/components/services/service-form-dialog/service-form-dialog.component';
import { TaskFormDialogComponent } from '../shared/components/tasks/task-form-dialog/task-form-dialog.component';
import { NoteFormDialogComponent } from '../shared/components/notes/note-form-dialog/note-form-dialog.component';

@NgModule({
  declarations: [
    DevicesListComponent,
    DevicesIndexComponent,
    DevicesComponent,
    DeviceEditComponent,
    DeviceDetailsButtonComponent,
    DeviceQuickViewDialogComponent,
    ViewDeviceComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DevicesRoutingModule,
    CustomerFormModule,
    DeviceFormModule
  ],
  providers: [
    RegistryNumberValidator
  ],
  entryComponents: [
    CustomerDialogComponent,
    DeviceQuickViewDialogComponent,
    ServiceFormDialogComponent,
    NoteFormDialogComponent,
    TaskFormDialogComponent
  ]
})
export class DevicesModule { }
