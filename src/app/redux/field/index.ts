import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { FieldssState } from './field.reducers';

export const selectFieldsState = (state: AppState) => state.fieldsState;

export const selectFields = createSelector(
    selectFieldsState,
    (state: FieldssState) => state.fields
);

export const getCurrentNavigatedField= createSelector(
    selectFieldsState,
    selectRouteParams,
    (state: FieldssState, params: Params) => state.fields.find(item => item.id === Number(params['id']))
);