import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAutocompleteComponent } from 'src/app/customers/components/customer-autocomplete/customer-autocomplete.component';
import { CoreModule } from '../core/core.module';
import { CustomerFormModule } from 'src/app/customers/customer-form/customer-form.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PrintSummaryBtnComponent } from './components/print-summary-btn/print-summary-btn.component';
import { AddServiceBtnComponent } from './components/services/add-service-btn/add-service-btn.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ServicesListComponent } from './components/services/services-list/services-list.component';
import { ServiceFormDialogComponent } from './components/services/service-form-dialog/service-form-dialog.component';
import { AddNoteBtnComponent } from './components/notes/add-note-btn/add-note-btn.component';
import { NoteFormDialogComponent } from './components/notes/note-form-dialog/note-form-dialog.component';
import { TaskFormDialogComponent } from './components/tasks/task-form-dialog/task-form-dialog.component';
import { AddTaskBtnComponent } from './components/tasks/add-task-btn/add-task-btn.component';
import { ColorPickerBtnsComponent } from './components/color-picker-btns/color-picker-btns.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { IconPickerBtnsComponent } from './components/icon-picker-btns/icon-picker-btns.component';
import { NoteComponent } from './components/notes/note/note.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { RemoveBtnComponent } from './components/remove-btn/remove-btn.component';
import { RemoveDialogComponent } from './dialogs/remove-dialog/remove-dialog.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    CustomerAutocompleteComponent,
    SpinnerComponent,
    PrintSummaryBtnComponent,
    AddServiceBtnComponent,
    TasksListComponent,
    EventsListComponent,
    NotesListComponent,
    ViewContactComponent,
    ServicesListComponent,
    ServiceFormDialogComponent,
    AddNoteBtnComponent,
    NoteFormDialogComponent,
    TaskFormDialogComponent,
    AddTaskBtnComponent,
    ColorPickerBtnsComponent,
    EditServiceComponent,
    EditNoteComponent,
    IconPickerBtnsComponent,
    NoteComponent,
    TaskComponent,
    RemoveBtnComponent,
    RemoveDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AgmCoreModule,
    NgxMaterialTimepickerModule,
    CustomerFormModule
  ],
  exports: [
    CustomerAutocompleteComponent,
    SpinnerComponent,
    PrintSummaryBtnComponent,
    AddServiceBtnComponent,
    AddNoteBtnComponent,
    AddTaskBtnComponent,
    TasksListComponent,
    EventsListComponent,
    NotesListComponent,
    ViewContactComponent,
    ServicesListComponent,
    RemoveBtnComponent,
    AgmCoreModule
  ],
  entryComponents: [
    ServiceFormDialogComponent,
    NoteFormDialogComponent,
    TaskFormDialogComponent,
    RemoveDialogComponent
  ]
})
export class SharedModule { }
