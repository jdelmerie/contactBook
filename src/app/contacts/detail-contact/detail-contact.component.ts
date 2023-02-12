import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { GetContactByID } from 'src/app/ngrx/app.actions';
import { getContact, getSnipper } from 'src/app/ngrx/app.selectors';
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
      this.store.select(getSnipper).subscribe(snipper => this.load = snipper)
    })
  }

  goToList() {
    this.router.navigateByUrl("/liste")
  }

}
