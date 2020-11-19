import { Action, createReducer, on } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response';
import { Seniority } from 'src/app/core/model/Seniority';
import { initSeniorities } from './seniority.actions';


export interface SenioritiesState {
    response: Response;
    seniorities: Seniority[];
}

export const initialState: SenioritiesState = {
    response: null, 
    seniorities: []
};

export const senioritiesReducer = createReducer(
    initialState,
    on(initSeniorities, (state, { response }) => ( { ...state, response: response, seniorities: response.result } )),
    );

export function reducer(state: SenioritiesState , action: Action) {
    return senioritiesReducer(state, action);
}