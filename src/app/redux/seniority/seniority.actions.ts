import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';
import { Seniority } from 'src/app/core/model/Seniority';

//all seniorities
export const retrieveAllSeniorities = createAction('[Seniority] Seniorities');
export const initSeniorities = createAction('[Seniority] init Seniorities', props<{response: Response}>());

//create seniority
export const createSeniority = createAction('[Seniority] create seniority', props<{seniority: Seniority}>());

//delete seniority
export const deleteSeniority = createAction('[Seniority] delete seniority', props<{id: number}>());