import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from "rxjs";
import { ContactService } from "../services/contact.service";
import * as AppActions from "./app.actions";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private service: ContactService
    ) { }

    getContacts$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.GetContacts.do),
        switchMap(() => {
            return this.service.getContactList()
                .pipe(
                    map((contacts) => AppActions.GetContacts.success({ contacts })),
                    catchError((err) => of(AppActions.GetContacts.fail({ error: err })))
                )
        })
    ))
    getContactById$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.GetContactByID.do),
        switchMap((action) => {
            return this.service.getContactById(action.id)
                .pipe(
                    map((contact) => AppActions.GetContactByID.success({ contact })),
                    catchError((err) => of(AppActions.GetContactByID.fail({ error: err })))
                )
        })
    ))
}
