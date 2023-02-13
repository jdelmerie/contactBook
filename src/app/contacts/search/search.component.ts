import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerms = new Subject<string>();
  contacts$: Observable<Contact[]> | undefined;

  constructor(
    private router: Router,
    private service: ContactService
  ) { }

  ngOnInit(): void {
    this.contacts$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.service.searchContactList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetails(id: number) {
    this.router.navigateByUrl('contact/' + id)
  }
}
