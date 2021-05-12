import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Device } from 'src/app/interfaces/device';

@Component({
  selector: 'crm-devices-index',
  templateUrl: './devices-index.component.html',
  styleUrls: ['./devices-index.component.scss']
})
export class DevicesIndexComponent implements OnInit, OnDestroy {

  selection: SelectionModel<Device>;

  constructor(
    private devicesService: DevicesService,
  ) {
    this.selection = this.devicesService.selection;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.devicesService.applyFilter('');
    this.selection.clear();
  }

  applyFilter(query: string): void {
    this.devicesService.applyFilter(query);
  }

}
