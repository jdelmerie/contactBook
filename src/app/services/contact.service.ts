import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getContactList(): Observable<Contact[]> {
        return this.http.get<Contact[]>('api/contacts');
    }

    getContactById(id: number): Observable<Contact> {
        return this.http.get<Contact>('api/contacts/' + id);
    }

    addContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>('api/contacts', contact, this.httpOptions);
    }

    updateContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>('api/contacts', contact, this.httpOptions);
    }

    deleteContact(contact: Contact): Observable<null> {
        return this.http.delete<null>('api/contacts/' + contact.id);
    }
}