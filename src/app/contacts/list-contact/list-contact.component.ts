import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { GetContacts } from 'src/app/ngrx/app.actions';
import { getContacts } from 'src/app/ngrx/app.selectors';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contacts: Observable<Contact[]> = this.store.select(getContacts);

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetContacts.do())
  }

  goToDetails(id: number) {
    this.router.navigateByUrl('contact/' + id)
  }
}
