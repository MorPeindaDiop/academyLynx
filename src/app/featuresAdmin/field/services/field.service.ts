import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Field } from 'src/app/core/model/Field.interface';
import { createField, deleteField, retrieveAllFields } from 'src/app/redux/field/field.actions';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private store: Store) { }

  retrieveAllFields() {
    this.store.dispatch(retrieveAllFields())
  }

  createField(field: Field) {
    this.store.dispatch(createField({field}))
  }

  deleteField(id : number) {
    this.store.dispatch(deleteField({id}))
  }
}
