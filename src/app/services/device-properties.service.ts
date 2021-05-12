import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicePropertiesService {

  private api: string = `${environment.api}/properties`;

  constructor(
    private http: HttpClient
  ) { }

  getProperties(): Observable<any> {
    return this.http.get<any>(`${this.api}/get`);
  }
}
