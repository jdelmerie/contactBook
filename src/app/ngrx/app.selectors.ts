import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RootState, ROOT_FEATURE_KEY } from "./app.reducer";

const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);

export const getAppName = createSelector(
    selectRoot,
    (state) => state.appName
);

export const getContacts = createSelector(
    selectRoot,
    (state) => state.contacts
);

export const getContact = createSelector(
    selectRoot,
    (state) => state.contact
);
export const getSpinner = createSelector(
    selectRoot,
    (state) => state.spinner
);
export const test = createSelector(
    selectRoot,
    (state) => state.contacts[state.contacts.length - 1].id
);

