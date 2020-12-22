import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CandidateAnswersState } from './candidate-answer.reducers';

export const selectCandidateAnswersState = (state: AppState) => state.candidateAnswersState;

export const selectCandidateAnswers = createSelector(
    selectCandidateAnswersState,
    (state: CandidateAnswersState) => state.candidateAnswers
);

export const selectCurrentCandidateAnswers = createSelector(
    selectCandidateAnswersState,
    (state: CandidateAnswersState) => state.currentCandidateAnswer
);