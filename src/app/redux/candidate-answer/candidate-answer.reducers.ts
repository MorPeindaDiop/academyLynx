import { Action, createReducer, on } from '@ngrx/store';
import { CandidateAnswer } from '../../core/model/CandidateAnswer.interface';
import { initCandidateAnswers, initCurrentCandidateAnswers } from './candidate-answer.actions';

export interface CandidateAnswersState {
    candidateAnswers: CandidateAnswer[];
    currentCandidateAnswer: CandidateAnswer[];
    error: String;
}

export const initialState: CandidateAnswersState = {
    candidateAnswers: [],
    currentCandidateAnswer: [],
    error: ""
};

export const candidateAnswersReducer = createReducer(
    initialState,
    on(initCandidateAnswers, (state, { response }) => ( { ...state, candidateAnswers: response.result, error: response.error } )),
    on(initCurrentCandidateAnswers, (state, { response }) => ( { ...state, currentCandidateAnswer: response.result, error: response.error } )),
    );

export function reducer(state: CandidateAnswersState , action: Action) {
    return candidateAnswersReducer(state, action);
}