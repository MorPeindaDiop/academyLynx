import { createAction, props } from '@ngrx/store';
import { CandidateSkill } from '../../core/model/CandidateSkill.interface';
import { Response } from '../../core/model/Response.interface';

//all candidates
export const retrieveAllCandidateSkills = createAction('[CandidateSkill] candidate skills');
export const initCandidateSkills = createAction('[CandidateSkill] init candidate skills', props<{response: Response}>());


//crea candidato
export const createCandidateSkill = createAction('[CandidateSkill] create candidate skill', props<{candidateSkill: CandidateSkill}>());
export const createCandidateSuccess = createAction('[CandidateSkill] create candidate skill success', props<{response: Response}>());
