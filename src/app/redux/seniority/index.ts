import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { SenioritiesState } from './seniority.reducers';

export const selectSenioritiesState = (state: AppState) => state.senioritiesState;

export const selectSeniorities = createSelector(
    selectSenioritiesState,
    (state: SenioritiesState) => state.seniorities
);

export const getCurrentNavigatedSeniority = createSelector(
    selectSenioritiesState,
    selectRouteParams,
    (state: SenioritiesState, params: Params) => state.seniorities.find(item => item.id === Number(params['id']))
);