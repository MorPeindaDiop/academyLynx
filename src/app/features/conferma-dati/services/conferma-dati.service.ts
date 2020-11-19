import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllSeniorities } from 'src/app/redux/seniority/seniority.actions';
import { retrieveAllSkills } from 'src/app/redux/skill/skill.actions';

@Injectable({
  providedIn: 'root'
})
export class ConfermaDatiService {

  constructor(private store: Store) { }

  retrieveAllSkills() {
    this.store.dispatch(retrieveAllSkills())
  }
  
  retrieveAllSeniorities() {
    this.store.dispatch(retrieveAllSeniorities())
  }
}
