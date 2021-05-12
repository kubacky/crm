import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/interfaces/device';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit, OnDestroy, AfterViewInit {

  spinner: boolean = true;

  columns: string[] = ['select', 'menu', 'registryNo', 'city', 'purchaseDate', 'lastServiceDate'];

  selection: SelectionModel<Device>;
  devices: MatTableDataSource<Device>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private devicesService: DevicesService
  ) {
    this.selection = this.devicesService.selection;
    this.devices = this.devicesService.devices;
  }

  ngOnInit() {
    this.getDevices();
  }

  ngOnDestroy() {
    this.devicesService.devices.data = []
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit() {
    this.devicesService.devices.paginator = this.paginator;
    this.devicesService.devices.sort = this.sort;
  }

  private getDevices(): void {
    const sub = this.devicesService.getDevices().subscribe(
      devices => this.devicesService.devices.data = devices
    )
    this.subscriptions.add(sub);
  }

  viewDevice(deviceId: number): void {
    this.router.navigate([`devices/view/${deviceId}`]);
  }

  selectRow(device: Device): void {
    this.devicesService.selection.toggle(device);
  }

  clearSelection(): void {
    this.devicesService.selection.clear();
  }
}
