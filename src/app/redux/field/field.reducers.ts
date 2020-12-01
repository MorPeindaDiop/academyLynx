import { Action, createReducer, on } from '@ngrx/store';
import { Field } from 'src/app/core/model/Field.interface';
import { initFields } from './field.actions';

export interface FieldssState {
    fields: Field[];
}

export const initialState: FieldssState = {
    fields: []
};

export const fieldsReducer = createReducer(
    initialState,
    on(initFields, (state, { response }) => ( { ...state, fields: response.result } )),
    );

export function reducer(state: FieldssState , action: Action) {
    return fieldsReducer(state, action);
}