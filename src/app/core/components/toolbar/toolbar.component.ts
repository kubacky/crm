import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('sidenav') sidenav: any;
  constructor() { }

  ngOnInit() {
  }

}
