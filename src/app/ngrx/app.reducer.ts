import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { Contact } from "../models/contact.model";
import * as AppActions from "./app.actions";

export const ROOT_FEATURE_KEY = 'root';

export interface State {
    [ROOT_FEATURE_KEY]: RootState
}

export interface RootState {
    appName: string;
    contacts: Contact[];
    contact: Contact | any;
    spinner: boolean
}

const initialState: RootState = {
    appName: 'Contact book',
    contacts: [],
    contact: {},
    spinner: false
}

function log(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const currentState = reducer(state, action);
        console.groupCollapsed(action.type)
        console.log('Etat précédent :', state);
        console.log('Action: ', action)
        console.log('Etat suivante :', currentState);
        console.groupEnd()
        return currentState;
    }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<RootState, Action>(
    initialState,
    on(AppActions.GetContacts.do, (state) => ({
        ...state,
        spinner: true
    })),
    on(AppActions.GetContacts.success, (state, { contacts }) => ({
        ...state,
        contacts,
        spinner: false
    })),
    on(AppActions.GetContactByID.do, (state) => ({
        ...state,
        contact: initialState.contact,
        spinner: true
    })),
    on(AppActions.GetContactByID.success, (state, { contact }) => ({
        ...state,
        contact,
        spinner: false
    })),
    on(AppActions.AddContact.do, (state) => ({
        ...state,
        spinner: true
    })),
    on(AppActions.AddContact.success, (state, { contact }) => ({
        ...state,
        contacts: [...state.contacts, contact],
        contact: contact,
        spinner: false
    })),
    on(AppActions.UpdateContact.do, (state) => ({
        ...state,
        spinner: true
    })),
    on(AppActions.UpdateContact.success, (state, { contact }) => ({
        ...state,
        contacts: state.contacts.map(c => contact.id === c.id ? contact : c),
        contact: contact,
        spinner: false
    })),
    on(AppActions.DeleteContact.do, (state, { contact }) => ({
        ...state,
        contacts: state.contacts.filter((c) => c.id !== contact.id),
        contact: initialState.contact,
        spinner: false
    })),
);