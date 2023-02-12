import { Injectable } from '@angular/core';
import { CONTACTS } from '../contacts/mock-contact-list';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

    createDb() {
        const contacts = CONTACTS;
        return { contacts };
    }
}
