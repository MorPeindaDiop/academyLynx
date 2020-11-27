import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Seniority } from 'src/app/core/model/Seniority';
import { createSeniority, deleteSeniority, retrieveAllSeniorities } from 'src/app/redux/seniority/seniority.actions';

@Injectable({
  providedIn: 'root'
})
export class SeniorityService {

  constructor(private store: Store) { }

  retrieveAllSeniorities() {
    this.store.dispatch(retrieveAllSeniorities())
  }

  createSeniority(seniority: Seniority) {
    this.store.dispatch(createSeniority({seniority}))
  }

  deleteSeniority(id : number) {
    this.store.dispatch(deleteSeniority({id}))
  }
}
