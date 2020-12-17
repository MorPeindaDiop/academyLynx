import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { CandidateAnswersState } from './candidate-answer.reducers';

export const selectCandidateAnswersState = (state: AppState) => state.candidateAnswersState;

export const selectCandidateAnswers = createSelector(
    selectCandidateAnswersState,
    (state: CandidateAnswersState) => state.candidateAnswers
);

export const getCurrentCandidateAnswers= createSelector(
    selectCandidateAnswersState,
    selectRouteParams,
    (state: CandidateAnswersState, params: Params) => state.currentCandidateAnswer.find(item => item.idTest === Number(params['id']))
);