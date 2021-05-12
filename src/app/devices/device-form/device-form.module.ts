import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicePropertiesComponent } from './device-properties/device-properties.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { AddDeviceBtnComponent } from './add-device-btn/add-device-btn.component';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';

/**
 * A couple components to creating or editing Devices. They are separated to create dialogs in another modules
 */
@NgModule({
  declarations: [
    DevicePropertiesComponent,
    DeviceFormComponent,
    DeviceEditComponent,
    DeviceDialogComponent,
    AddDeviceBtnComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    DevicePropertiesComponent,
    DeviceFormComponent,
    DeviceEditComponent,
    DeviceDialogComponent,
    AddDeviceBtnComponent
  ]
})
export class DeviceFormModule { }
