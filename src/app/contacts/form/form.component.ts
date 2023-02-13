import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/models/address.model';
import { Contact } from 'src/app/models/contact.model';
import { AddContact, GetContactByID, UpdateContact } from 'src/app/ngrx/app.actions';
import { getContact, getContacts, getSpinner, test } from 'src/app/ngrx/app.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact!: Contact;
  load!: boolean;
  myForm: FormGroup;
  title: string = '';
  addForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.myForm = this.formBuilder.group({
      id: [0, [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      note: [''],
      avatar: ['https://dummyimage.com/300', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      switch (data['link']) {
        case 'add': this.add();
          break;
        default: this.edit();
          break;
      }
    });
  }

  onSubmit(myForm: FormGroup) {
    if (myForm.valid) {
      let _id = 0;
      this.store.select(getContacts).subscribe(contacts => {
        _id = contacts.length + 1;
      });

      const address: Address = { street: myForm.value.street, city: myForm.value.city, zipcode: myForm.value.zipcode }
      const contact: Contact = {
        id: myForm.value.id === 0 ? _id : myForm.value.id,
        firstname: myForm.value.firstname,
        lastname: myForm.value.lastname,
        email: myForm.value.email,
        phone: myForm.value.phone,
        address: address,
        note: myForm.value.note,
        avatar: myForm.value.avatar
      }
      if (this.addForm) this.store.dispatch(AddContact.do({ contact }))
      else this.store.dispatch(UpdateContact.do({ contact }));
      this.router.navigateByUrl("/contact/" + contact.id);
    }
  }

  private add() {
    this.title = "Add a new contact";
    this.addForm = true;
  }

  private edit() {
    this.title = "Edit this contact";
    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(GetContactByID.do({ id }));
    this.store.select(getContact).subscribe(contact => {
      this.store.select(getSpinner).subscribe(snipper => this.load = snipper)
      this.contact = contact;
      this.myForm.setValue({
        id: this.contact.id,
        firstname: this.contact.firstname,
        lastname: this.contact.lastname,
        email: this.contact.email,
        phone: this.contact.phone,
        street: this.contact.address.street,
        city: this.contact.address.city,
        zipcode: this.contact.address.zipcode,
        note: this.contact.note,
        avatar: this.contact.avatar
      })
    });
  }
}
