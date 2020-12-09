import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initUsers, retrieveAllUsers } from './login.actions';


@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllUsers(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("user/findAll")
    }
    getAllUsers$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllUsers),
        switchMap(() => this.retreiveAllUsers().pipe(
            map((response) => initUsers({ response }))
        ))
    ));
    

}