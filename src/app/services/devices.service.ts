import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/interfaces/device';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Service } from 'src/app/interfaces/service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private api: string = `${environment.api}/devices`;

  spinner: Subject<boolean> = new Subject<boolean>();

  selection: SelectionModel<Device> = new SelectionModel<Device>(true, []);
  devices: MatTableDataSource<Device> = new MatTableDataSource();

  constructor(
    private http: HttpClient
  ) {
    this.spinner.next(true);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.api}/get`);
  }

  getDevice(deviceId: number): Observable<Device> {
    return this.http.get<Device>(`${this.api}/get/device/${deviceId}`);
  }

  saveDevice(device: Device): Observable<any> {
    return this.http.post<any>(`${this.api}/save`, device);
  }

  find(registryNo): Observable<Device[]> {
    return this.http.post<Device[]>(`${this.api}/find`, registryNo)
  }

  isRegistryNumberTaked(query: string, deviceId: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.api}/check`, { query: query, deviceId: deviceId })
  }

  applyFilter(query: string): void {
    query = query.trim();
    query = query.toLowerCase();
    this.devices.filter = query;
  }
}
