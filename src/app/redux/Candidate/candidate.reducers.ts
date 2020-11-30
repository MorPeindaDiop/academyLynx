import { Action, createReducer, on } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';

import { deleteCandidate, initCandidate, initCandidates } from './candidate.actions';

export interface CandidatesState {
    candidates: Candidate[];
    currentCandidate: Candidate;
    error: String;
}

export const initialState: CandidatesState = {
    candidates: [],
    currentCandidate: null,
    error: "",
};

export const candidatesReducer = createReducer(
    initialState,
    on(initCandidates, (state, { response }) => ({ ...state, candidates: response.result, error: response.error })),
    on(initCandidate, (state, { response }) => ({ ...state, currentCandidate: response.result })),
    on(deleteCandidate, (state, { }) => ({ ...state, currentCandidate: null })),
);

export function reducer(state: CandidatesState, action: Action) {
    return candidatesReducer(state, action);
}
