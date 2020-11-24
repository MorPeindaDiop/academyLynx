import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';
import { createCandidateSkill } from 'src/app/redux/candidate-skill/candidate-skill.actions';
import { createCandidate } from 'src/app/redux/candidate/candidate.actions';
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
  
  createCandidate(candidate: Candidate){
    this.store.dispatch(createCandidate({candidate}))
  }

  createCandidateSkill(candidateSkill: CandidateSkill){
    this.store.dispatch(createCandidateSkill({candidateSkill}))
  }

  
}
