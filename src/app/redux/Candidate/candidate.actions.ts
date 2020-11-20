import { createAction, props } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate';
import { Response } from 'src/app/core/model/Response';

export const retrieveAllCandidates = createAction('[Candidate] candidates');
export const initCandidates = createAction('[Candidate] init candidates', props<{response: Response}>());
export const createCandidate = createAction('[Candidate] create candidate', props<{name: string, surname: string, dataTest: Date, idSeniority: number}>());
export const createCandidateSuccess = createAction('[Candidate] create candidate success', props<{candidate: Candidate}>());