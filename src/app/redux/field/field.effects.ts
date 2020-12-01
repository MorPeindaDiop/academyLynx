import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { Field } from 'src/app/core/model/Field.interface';
import { createField, deleteField, initFields, retrieveAllFields } from './field.actions';

@Injectable()
export class FieldsEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retrieveAllFields():Observable<Response>{
        return this.http.retrieveGetCall<Response>("field/findAll")
    }

    createField(field: Field): Observable<Response> {
        return this.http.retrievePostCall<Response>("field/create", field)
    }

    deleteField(id: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("field/delete", id)
    }

    getAllFields$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllFields),
        switchMap(() => this.retrieveAllFields().pipe(
            map((response) => initFields({response}))
        ))
    ));

    createField$ = createEffect(() => this.actions$.pipe(
        ofType(createField),
        switchMap(field => this.createField(field.field).pipe(
            map(() => retrieveAllFields()),
            )
        ))
    );

    deleteField$ = createEffect(() => this.actions$.pipe(
        ofType(deleteField),
        switchMap(id => this.deleteField(id.id).pipe(
            map(() => retrieveAllFields()),
            )
        ))
    );

}