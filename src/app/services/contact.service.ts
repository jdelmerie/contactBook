import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    getContactList(): Observable<Contact[]> {
        return this.http.get<Contact[]>('api/contacts');
    }

    getContactById(id: number): Observable<Contact> {
        return this.http.get<Contact>('api/contacts/' + id);
    }


}