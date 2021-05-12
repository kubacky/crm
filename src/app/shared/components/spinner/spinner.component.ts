import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'crm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  visible: boolean = false;

  constructor(
    private spinnerSevice: SpinnerService
  ) {
    this.spinnerSevice.spinner.subscribe(
      spinner => this.visible = spinner
    )}
}