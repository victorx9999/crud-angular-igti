import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  constructor(private contactsService: ContactsService) { }

  contacts: Contact[] = []

  ngOnInit(): void {
    this.contactsService.listContacts().subscribe(contacts => {
      this.contacts = contacts
    })
  }

  deleteContact(contact: Contact) {
    this.contactsService.deleteContact(contact.id).subscribe(() => {
      const index = this.contacts.indexOf(contact)

      this.contacts.splice(index, 1)
    })
  }

}
