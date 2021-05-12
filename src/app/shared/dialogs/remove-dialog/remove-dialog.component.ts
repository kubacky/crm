import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'crm-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {

  message: string;
  buttonTxt: 'Usuń' | 'Skasuj';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.setTextValues();
  }

  private setTextValues(): void {
    this.message = this.data.message;
    this.buttonTxt = (this.data.action === 'delete') ? 'Usuń' : 'Skasuj';
  }

}
