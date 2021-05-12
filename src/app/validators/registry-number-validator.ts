import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DevicesService } from 'src/app/services/devices.service';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RegistryNumberValidator implements AsyncValidator  {

  private deviceId: any = false;

  constructor(private ds: DevicesService) { }

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    return this.ds.isRegistryNumberTaked(ctrl.value, this.deviceId)
      .pipe(
      debounceTime(300),
      distinctUntilChanged(),  
      map(res => (res) ? { isNumberTaken: true } : null)
      )
  }

  setDeviceId(deviceId: any): void {
    this.deviceId = deviceId;
  }

  clearDeviceId(): void {
    this.deviceId = false;
  }
}