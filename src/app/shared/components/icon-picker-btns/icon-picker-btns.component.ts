import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'crm-icon-picker-btns',
  templateUrl: './icon-picker-btns.component.html',
  styleUrls: ['./icon-picker-btns.component.scss']
})
export class IconPickerBtnsComponent implements OnInit {

  @Input() form: FormGroup;

  icons: string[] = ['phone', 'map-marker', 'users', 'envelope', 'file-text', 'money', 'clock-o'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let ctrl = this.fb.control(this.icons[0], Validators.required);
    this.form.addControl('icon', ctrl);
  }
}
