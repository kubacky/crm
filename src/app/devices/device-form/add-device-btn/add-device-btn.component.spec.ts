import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceBtnComponent } from './add-device-btn.component';

describe('AddDeviceBtnComponent', () => {
  let component: AddDeviceBtnComponent;
  let fixture: ComponentFixture<AddDeviceBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
