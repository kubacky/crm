import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private api: string = `${environment.api}/addresses`;

  constructor(
    private http: HttpClient
  ) { }

  getProvinces(): Observable<any> {
    return this.http.get<any>(`${this.api}/get/provinces`);
  }
}
