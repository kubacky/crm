import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/interfaces/device';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.scss']
})
export class ViewDeviceComponent implements OnInit, OnDestroy {

  device: Device;
  sourceId: number;


  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.getRouteParams();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getRouteParams(): void {
    let sub = this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('id'));
        this.sourceId = id;
        this.getDevice(id);
      }
    )

    this.subscription.add(sub);
  }

  private getDevice(deviceId: number): void {
    let sub = this.devicesService.getDevice(deviceId).subscribe(
      device => {
        this.device = device;
        this.setCoordinates();
      }
    )

    this.subscription.add(sub);
  }

  private setCoordinates(): void {
    this.device.address.lat = Number(this.device.address.lat);
    this.device.address.lng = Number(this.device.address.lng)
  }

  showCustomerInfo(): void {

  }
}
