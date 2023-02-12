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
    snipper: boolean;
}

const initialState: RootState = {
    appName: 'Contact book',
    contacts: [],
    contact: {},
    snipper: false
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
    on(AppActions.GetContacts.success, (state, { contacts }) => ({ ...state, contacts })),
    on(AppActions.GetContactByID.do, (state) => ({ ...state, contact: initialState.contact, snipper: true })),
    on(AppActions.GetContactByID.success, (state, { contact }) => ({ ...state, contact, snipper: initialState.snipper }))
);