import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/interfaces/device';
import { Customer } from 'src/app/interfaces/customer';
import { MatDialog } from '@angular/material';
import { NoteFormDialogComponent } from '../note-form-dialog/note-form-dialog.component';

@Component({
  selector: 'crm-add-note-btn',
  templateUrl: './add-note-btn.component.html',
  styleUrls: ['./add-note-btn.component.scss']
})
export class AddNoteBtnComponent implements OnInit {

  @Input() elements: Device[] | Customer[];
  @Input() view: 'compact' | 'full';
  @Input() sourceId: number;
  @Input() type: 'device' | 'customer' | 'product' | 'document';

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addNote(): void {
    let config = {
      data: {
        elements: this.elements,
        type: this.type,
        sourceId: this.sourceId,
        edit: false
      }
    }

    this.dialog.open(
      NoteFormDialogComponent, config
    )
  }

}
