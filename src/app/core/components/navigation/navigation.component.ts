import { Component } from '@angular/core';

@Component({
  selector: 'crm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor() { }

  toggle($event) {
    $event.currentTarget.classList.toggle('open');
  }
}
