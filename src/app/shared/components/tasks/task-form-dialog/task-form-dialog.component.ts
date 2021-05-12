import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';
import { Subscription } from 'rxjs';

/** todo: spiac to w jeden komponent z notesComponenet */
@Component({
  selector: 'crm-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  task: Task;

  private subscription: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private tasksService: TasksService,
    private dialogRef: MatDialogRef<TaskFormDialogComponent>
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: '',
      date: ['', Validators.required],
      time: '',
      sourceId: this.data.sourceId,
      sourceType: this.data.sourceType
    });

    this.checkIfIsEdited();
  }

  private checkIfIsEdited(): void {
    if (this.data.isEdited) {
      this.task = this.data.task;
      let ctrl = this.fb.control(this.data.note.id);

      this.form.addControl('id', ctrl);
    }
  }

  save(): void {
    const task = this.form.value;

    const sub = this.tasksService.saveTask(task).subscribe(
      res => this.handleResponse(res)
    );

    this.subscription.add(sub);
  }

  private handleResponse(response: any): void {
    if (response.status === 'OK') {
      this.dialogRef.close();
    }
    else {
      //to do: error handling
    }
  }

}
