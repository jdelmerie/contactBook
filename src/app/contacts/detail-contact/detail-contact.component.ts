import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Contact } from 'src/app/models/contact.model';
import { DeleteContact, GetContactByID } from 'src/app/ngrx/app.actions';
import { getContact, getSpinner } from 'src/app/ngrx/app.selectors';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  contact!: Contact;
  load!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.store.dispatch(GetContactByID.do({ id }));
    }
    this.store.select(getContact).subscribe(contact => {
      this.contact = contact;
      this.store.select(getSpinner).subscribe(snipper => this.load = snipper)
    })
  }

  goToList() {
    this.router.navigateByUrl("/liste")
  }

  goToEdit(contact: Contact) {
    this.router.navigateByUrl("/edit/" + contact.id)
  }

  deleteContact(contact: Contact) {
    if (confirm("Do you really want to delete this contact ?")) {
      this.store.dispatch(DeleteContact.do({ contact }));
      this.router.navigateByUrl("/liste")
    }
  }
}
