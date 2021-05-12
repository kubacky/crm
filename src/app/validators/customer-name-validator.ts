import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomerNameValidator implements AsyncValidator {

  constructor(private cs: CustomersService) { }

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    return this.cs.isCustomerNameTaken(ctrl.value)
      .pipe(
      debounceTime(300),
      distinctUntilChanged(),  
      map(res => (res) ? { isNameTaken: true } : null)
      )
  }
}