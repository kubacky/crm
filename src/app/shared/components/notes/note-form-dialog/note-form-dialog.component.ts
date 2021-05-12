import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/interfaces/note';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-note-form-dialog',
  templateUrl: './note-form-dialog.component.html',
  styleUrls: ['./note-form-dialog.component.scss']
})
export class NoteFormDialogComponent implements OnInit {

  form: FormGroup;
  note: Note;

  private subscription: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NoteFormDialogComponent>,
    private notesService: NotesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildForm(): void {
    this.form = this.fb.group({
      title: '',
      content: ['', Validators.required],
      type: this.data.type,
      sourceId: this.data.sourceId
    });

    this.checkIfIsEdited();
  }

  private checkIfIsEdited(): void {
    if (this.data.isEdited) {
      this.note = this.data.note;
      let ctrl = this.fb.control(this.data.note.id);

      this.form.addControl('id', ctrl);
    }
  }

  save(): void {
    const note = this.form.value;

    const sub = this.notesService.saveNote(note).subscribe(
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
