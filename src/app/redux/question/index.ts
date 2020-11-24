import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { QuestionsState } from './question.reducers';

export const selectQuestionsState = (state: AppState) => state.questionState;

export const selectQuestions = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.questions
);

// export const getCurrentNavigatedProduct = createSelector(
//     selectQuestionsState,
//     selectRouteParams,
//     (state: ProductsState, params: Params) => state.products.find(item => item.id === Number(params['id']))
// );