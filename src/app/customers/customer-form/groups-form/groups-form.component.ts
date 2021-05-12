import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./groups-form.component.scss']
})
export class GroupsFormComponent implements OnInit {

  @Input() form: FormGroup
  groups: any;

  constructor(
    private groupsService: GroupsService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupsService.getGroups('customer').subscribe(
      groups => {
        this.groups = groups;
        this.cdr.markForCheck();
      }
    )
  }

  toggleGroup(id: number): void {
    id = Number(id);
    const groups = <FormArray>this.form.controls['groups'];
    const group = this.fb.control(id);

    const i: number = groups.getRawValue().indexOf(id);

    if (i >= 0) {
      groups.removeAt(i);
    }
    else {
      groups.push(group);
    }
  }

  isAssigned(id: number): boolean {
    id = Number(id);
    const groups = <FormArray>this.form.controls['groups'];

    const i: number = groups.getRawValue().indexOf(id);

    if (i >= 0) {
      return true;
    }
    return false;
  }

}
