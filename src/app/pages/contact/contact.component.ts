import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: String = '';
  phone: String = '';
  email: String = '';
  message: String = '';

  constructor() {}
  submitForm(ev: Event) {
    console.log(ev);
  }
}
