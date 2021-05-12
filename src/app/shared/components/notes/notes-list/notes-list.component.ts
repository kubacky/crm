import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { MatDialog } from '@angular/material';
import { NoteFormDialogComponent } from '../note-form-dialog/note-form-dialog.component';

@Component({
  selector: 'crm-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  @Input() notes: Note[];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  editNote(note: Note): void {
    let config = {
      data: {
        note: note,
        isEdited: true
      }
    }

    this.dialog.open(
      NoteFormDialogComponent,
      config
    )
  }

}
