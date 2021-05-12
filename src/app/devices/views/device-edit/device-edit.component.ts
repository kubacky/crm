
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/interfaces/device';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'crm-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {

  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.checkRoutes();
  }

  private checkRoutes(): void {
    this.route.paramMap.subscribe(
      params => this.setTitle(params)
    )
  }

  private setTitle(routeParams: any): void {
    const id = Number(routeParams.get('id'));
    this.title = (id) ? 'Edytuj produkt' : 'Nowy produkt';
  }

  onSaved(device: Device): void {
    this.router.navigate([`/devices/view/${device.id}`]);
  }

  onCanceled(): void {
    this.location.back();
  }
}
