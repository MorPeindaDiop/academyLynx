import { createAction, props } from '@ngrx/store';
import { Response } from '../../core/model/Response.interface';

export const retrieveAllQuestions = createAction('[Question] questions');
export const initQuestions = createAction('[Question] init questions', props<{response: Response}>());