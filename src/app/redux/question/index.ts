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

export const getCurrentNavigatedQuestion = createSelector(
    selectQuestionsState,
    selectRouteParams,
    (state: QuestionsState, params: Params) => state.questions.find(item => item.id === Number(params['id']))
);