import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';

@Component({
  selector: 'crm-edit-note',
  template: '',
})
export class EditNoteComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() note: Note;

  constructor() { }

  ngOnInit() {
    this.checkIfIsEdited();
  }

  checkIfIsEdited(): void {
    if (this.form.contains('id')) {
      this.setFormValues();
    }
  }

  setFormValues(): void {
    this.form.get('title').setValue(this.note.title);
    this.form.get('content').setValue(this.note.content);
    this.form.get('class').setValue(this.note.class);
    this.form.get('type').setValue(this.note.type);
    this.form.get('sourceId').setValue(this.note.sourceId);
  }

}
