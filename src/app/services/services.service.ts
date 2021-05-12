import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../interfaces/service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private api: string = `${environment.api}/services`;

  constructor(
    private http: HttpClient
  ) { }

  getServices(id: number, type: string): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.api}/${id}/${type}`);
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.api}/get/service/${id}`);
  }

  saveService(service: Service): Observable<any> {
    return this.http.post(`${this.api}/save`, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/delete/${id}`);
  }

  getTechnicians(): Observable<any> {
    return this.http.get<any>(`${this.api}/get/technicians`);
  }
}
