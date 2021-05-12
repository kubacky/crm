import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'crm-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent {

  @Input() contact: Contact;

}
