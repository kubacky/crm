import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-branches-form',
  templateUrl: './branches-form.component.html',
  styleUrls: ['./branches-form.component.scss']
})
export class BranchesFormComponent implements OnInit {

  @Input() form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  addBranch(): void {
    let branches = <FormArray>this.form.get('branches');
    const branch = this.buildBranchForm();

    branches.push(branch);
  }

  buildBranchForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: '',
      mail: '',
    })
  }

  removeBranch(index: number): void {
    let branches = <FormArray>this.form.get('branches');
    branches.removeAt(index);
  }

}
