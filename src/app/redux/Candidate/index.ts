import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CandidatesState } from './candidate.reducers';

export const selectCandidatesState = (state: AppState) => state.candidatesState;

export const selectCandidates = createSelector(
    selectCandidatesState,
    (state: CandidatesState) => state.candidates
);

export const getCurrentCandidate = createSelector(
    selectCandidatesState,
    (state: CandidatesState) => state.currentCandidate
);

export const getCurrentCandidateScore = createSelector(
    selectCandidatesState,
    (state: CandidatesState) => state.currentCandidateScore
);