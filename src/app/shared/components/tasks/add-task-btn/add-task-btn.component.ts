import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import { Customer } from 'src/app/interfaces/customer';
import { MatDialog } from '@angular/material';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';

@Component({
  selector: 'crm-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss']
})
export class AddTaskBtnComponent implements OnInit {

  @Input() elements: Device[] | Customer[];
  @Input() view: 'compact' | 'full';
  @Input() sourceId: number;
  @Input() type: 'device' | 'customer' | 'product' | 'document';

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addTask(): void {
    let config = {
      data: {
        selection: this.elements,
        sourceType: this.type,
        sourceId: this.sourceId,
        edit: false
      }
    }

    this.dialog.open(
      TaskFormDialogComponent,
      config
    )
  }

}
