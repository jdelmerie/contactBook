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
export const AddContact = createActionGroup({
    source: 'CONTACTS | ADD CONTACT',
    events: {
        'DO': props<{ contact: Contact }>(),
        'SUCCESS': props<{ contact: Contact }>(),
        'FAIL': props<{ error: string }>()
    }
})
export const UpdateContact = createActionGroup({
    source: 'CONTACTS | UPDATE CONTACT',
    events: {
        'DO': props<{ contact: Contact }>(),
        'SUCCESS': props<{ contact: Contact }>(),
        'FAIL': props<{ error: string }>()
    }
})
export const DeleteContact = createActionGroup({
    source: 'CONTACTS | DELETE CONTACT',
    events: {
        'DO': props<{ contact: Contact }>(),
        'SUCCESS': emptyProps(),
        'FAIL': props<{ error: string }>()
    }
})