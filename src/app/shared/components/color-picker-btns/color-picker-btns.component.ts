import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crm-color-picker-btns',
  templateUrl: './color-picker-btns.component.html',
  styleUrls: ['./color-picker-btns.component.scss']
})
export class ColorPickerBtnsComponent implements OnInit {

  @Input() form: FormGroup;
  colors: string[] = ['black', 'red', 'blue', 'green', 'purple' ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let ctrl = this.fb.control(this.colors[0], Validators.required);
    this.form.addControl('class', ctrl);
  }
    
}