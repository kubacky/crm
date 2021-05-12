import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevicePropertiesService } from 'src/app/services/device-properties.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-properties',
  templateUrl: './device-properties.component.html',
  styleUrls: ['./device-properties.component.scss']
})
export class DevicePropertiesComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  properties: any;

  @Input() form: FormGroup;

  constructor(
    private propertiesService: DevicePropertiesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    this.propertiesService.getProperties().subscribe(
      properties => {
        this.properties = properties;
        this.buildForm();
        this.cdr.markForCheck();
      }
    )
  }

  buildForm(): void {
    this.properties.forEach(
      property => {
        let ctrl = new FormControl('');
        this.form.addControl(property.id, ctrl);

        if (property.required) {
          let first = property.values[0].id
          this.form.get(property.id).setValue(first);
        }
      }
    )
  }
}
