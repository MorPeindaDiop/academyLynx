import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Mail } from 'src/app/core/model/Mail.interface';
import { Response } from 'src/app/core/model/Response.interface';

import { initResponse } from './mail.actions';

export interface MailState {
    response: Mail;
    error: string
}

export const initialState: MailState = {
    response: null,
    error: ''
};

export const mailReducer = createReducer(
    initialState,
    on(initResponse, (state, { response }) => ({ ...state, response: response.result, error: response.error })),
);

export function reducer(state: MailState, action: Action) {
    return mailReducer(state, action);
}
