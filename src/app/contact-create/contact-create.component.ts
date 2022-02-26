import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact, ContactsService } from './../contacts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent {


  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  constructor(private ContactsService: ContactsService, private router: Router) { }

  createContact(): void {
    this.ContactsService.createContact(this.contactForm.value).subscribe(
      contact => {
        this.router.navigate(['/contacts'])
      }
    )

  }

}
