import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';
import { Field } from 'src/app/core/model/Field.interface';

//all fields
export const retrieveAllFields = createAction('[Field] fields');
export const initFields = createAction('[Field] init fields', props<{response: Response}>());

//create field
export const createField = createAction('[Field] create field', props<{field: Field}>());

//delete field
export const deleteField = createAction('[Field] delete field', props<{id: number}>());