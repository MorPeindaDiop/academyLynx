import { Action, createReducer, on } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Response } from 'src/app/core/model/Response.interface';
import { createCandidate, createCandidateSuccess, initCandidates, initCandidateSuccess } from './candidate.actions';

export interface CandidatesState {
    candidates: Candidate[];
    currentCandidate: Candidate;
    currentCandidateScore: Candidate;
    error: String;
}

export const initialState: CandidatesState = {
    candidates: [],
    currentCandidate: null,
    error: "",
    currentCandidateScore: null
};

export const candidatesReducer = createReducer(
    initialState,
    on(initCandidates, (state, { response }) => ( { ...state, candidates: response.result, error: response.error } )),
    on(createCandidateSuccess, (state, { response }) => ( { ...state, currentCandidate: response.result } )),
    on(initCandidateSuccess, (state, { response }) => ( { ...state, currentCandidateScore: response.result } )),
    );

export function reducer(state: CandidatesState , action: Action) {
    return candidatesReducer(state, action);
}
