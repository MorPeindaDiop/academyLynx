import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from '@ngrx/store';
import { map, switchMap } from "rxjs/operators";
import { HttpCommunicationsService } from "../../core/HttpCommunications/http-communications.service";
import { Mail } from "../../core/model/Mail.interface";
import { sendMail, initResponse } from './mail.actions';
import { Response } from 'src/app/core/model/Response.interface';

@Injectable()
export class MailEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    sendMail(mail: Mail): Observable<Response> {
        return this.http.retrievePostCall<Response>("mail/send", mail)
    }

    sendMail$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(sendMail),
        switchMap((mail) => this.sendMail(mail.mail).pipe(
            map((response) => initResponse({ response }))
        ))
    ));

}