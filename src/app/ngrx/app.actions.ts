import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Contact } from "../models/contact.model";

export const GetContacts = createActionGroup({
    source: 'CONTACTS | GET CONTACTS',
    events: {
        'DO': emptyProps(),
        'SUCCESS': props<{ contacts: Contact[] }>(),
        'FAIL': props<{ error: string }>()
    }
})
export const GetContactByID = createActionGroup({
    source: 'CONTACTS | GET CONTACT BY ID',
    events: {
        'DO': props<{ id: number }>(),
        'SUCCESS': props<{ contact: Contact }>(),
        'FAIL': props<{ error: string }>()
    }
})