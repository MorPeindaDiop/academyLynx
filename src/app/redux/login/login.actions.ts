import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';

export const retrieveAllUsers = createAction('[User] Users');
export const initUsers = createAction('[USer] init Users', props<{response: Response}>());
