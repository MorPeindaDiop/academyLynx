import { createAction, props } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Response } from 'src/app/core/model/Response.interface';
import { User } from 'src/app/core/model/User.interface';

export const retrieveAllUsers = createAction('[User] Users');

export const loginUser = createAction('[User] login', props<{username: string, password: string}>());
export const initUser = createAction('[UserInit] init', props<{user: User}>());
export const loginUserSuccess = createAction('[User] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[User] Login Failure', props<{error: string}>());


export const loginUserCandidate = createAction('[Candidate] login canidate', props<{username: string, password: string, idCandidate: string}>());
export const initUserCandidate = createAction('[CandidateInit] init', props<{candidate: Candidate}>());
export const loginUserCandidateSuccess = createAction('[Candidate] Login Success', props<{candidate: Candidate}>());
export const loginUserCanidateFailure = createAction('[Candidate] Login Failure', props<{error: string}>());







