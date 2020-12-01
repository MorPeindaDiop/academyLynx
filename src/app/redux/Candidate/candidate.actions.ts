import { createAction, props } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Response } from 'src/app/core/model/Response.interface';

//init candidate
export const retrieveAllCandidates = createAction('[Candidate] candidates');
export const initCandidates = createAction('[Candidate] init candidates', props<{response: Response}>());
export const initCandidate = createAction('[Candidate] init candidate success', props<{response: Response}>());
export const setCandidateTime = createAction('[Candidate] candidateTime', props<{idCandidate: number}>());


//crea candidato
export const createCandidate = createAction('[Candidate] create candidate', props<{candidate: Candidate}>());

//score
export const setCandidateScore = createAction('[Candidate] candidateScore', props<{idCandidate: number}>());

//delete candidato
export const deleteCandidate = createAction('[Candidate] deleteCandidate', props<{idCandidate: number}>());