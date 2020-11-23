import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';

export const retrieveAllSeniorities = createAction('[Seniority] Seniorities');
export const initSeniorities = createAction('[Seniority] init Seniorities', props<{response: Response}>());