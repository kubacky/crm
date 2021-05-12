import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ServiceFormDialogComponent } from '../service-form-dialog/service-form-dialog.component';
import { Device } from 'src/app/interfaces/device';
import { DevicesService } from 'src/app/services/devices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' }))
    ]),
  ],
})
export class ServicesListComponent implements OnInit, OnDestroy {

  @Input() services: Service[];
  private subscription: Subscription = new Subscription();

  dataSource: MatTableDataSource<Service> = new MatTableDataSource<Service>();
  columns: string[] = ['date', 'technician', 'type'];
  expandedElement: Service | null;

  constructor(
    private dialog: MatDialog,
    private devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.services;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editService(service: Service): void {
    const sub = this.devicesService.getDevice(service.deviceId).subscribe(
      device => this.showDialog(device, service.id)
    );

    this.subscription.add(sub);
  }

  private showDialog(device: Device, serviceId: number): void {
    let config = {
      data: {
        devices: [device],
        serviceId: serviceId
      }
    };

    console.log(config);

    this.dialog.open(
      ServiceFormDialogComponent, config
    )
  }

}
