import { createAction, props } from '@ngrx/store';
import { CandidateResponse } from 'src/app/core/model/CandidateResponse.interface';
import { CandidateAnswer } from '../../core/model/CandidateAnswer.interface';
import { Response } from '../../core/model/Response.interface';

//all candidates
export const retrieveAllCandidateAnswers = createAction('[CandidateAnswer] candidate answers');
export const initCandidateAnswers = createAction('[CandidateAnswer] init candidate answers', props<{response: Response}>());


//crea candidato
export const createCandidateAnswer = createAction('[CandidateAnswer] create candidate answer', props<{candidateResponse: CandidateResponse[]}>());

//current candidate answer
export const retrieveCandidateAnswersByIdCandidate = createAction('[CandidateAnswer] candidate answers by id', props<{idCandidate: number}>());
export const initCandidateAnswersByIdCandidate = createAction('[CandidateAnswer] init candidate answers by id', props<{response: Response}>());
