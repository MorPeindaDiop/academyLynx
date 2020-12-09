import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';
import { User } from 'src/app/core/model/User.interface';

export const retrieveAllUsers = createAction('[User] Users');

export const initUsers = createAction('[User] init', props<{user: User}>());
export const loginUser = createAction('[Auth] Login', props<{username: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());
