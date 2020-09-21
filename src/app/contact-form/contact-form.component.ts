import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'persohub-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];
  log(x) {
    console.log(x);

  }
  submit(f) {
    this.log(f);
  }
}
