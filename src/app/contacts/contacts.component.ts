import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  onClickFacebook() {
    window.open('https://www.facebook.com/gomovept/', '_blank');
  }

  onClickInstagram() {
  window.open('https://www.instagram.com/coach.paulogoncalves/', '_blank');
  }

  onClickEmail() {
    window.location.href = 'mailto:sample@email.com';
  }

  ngOnInit() {
  }

}
