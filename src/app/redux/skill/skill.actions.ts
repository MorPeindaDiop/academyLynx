import { createAction, props } from '@ngrx/store';
import { Skill } from 'src/app/core/model/Skill.interface';
import { Response } from '../../core/model/Response.interface';

//all skills
export const retrieveAllSkills = createAction('[Skill] skills');
export const initSkills = createAction('[Skill] init skills', props<{response: Response}>());

//create skill
export const createSkill = createAction('[Skill] create skill', props<{skill: Skill}>());