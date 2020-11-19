import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response';

export const retrieveAllSkills = createAction('[Skill] skills');
export const initSkills = createAction('[Skill] init skills', props<{response: Response}>());