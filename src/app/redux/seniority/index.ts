import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SenioritiesState } from './seniority.reducers';

export const selectSenioritiesState = (state: AppState) => state.senioritiesState;

export const selectSeniorities = createSelector(
    selectSenioritiesState,
    (state: SenioritiesState) => state.seniorities
);

// export const getCurrentNavigatedProduct = createSelector(
//     selectSkillsState,
//     selectRouteParams,
//     (state: ProductsState, params: Params) => state.products.find(item => item.id === Number(params['id']))
// );