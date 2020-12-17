import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer.interface';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';
import { TestQuestion } from 'src/app/core/model/TestQuestion.interface';
import { createCandidateTest } from 'src/app/redux/candidate-answer/candidate-answer.actions';
import { createCandidateSkill } from 'src/app/redux/candidate-skill/candidate-skill.actions';
import { createCandidate } from 'src/app/redux/candidate/candidate.actions';
import { retrieveAllQuestions } from 'src/app/redux/question/question.actions';
import { retrieveAllSeniorities } from 'src/app/redux/seniority/seniority.actions';
import { retrieveAllSkills } from 'src/app/redux/skill/skill.actions';
import { createTest } from 'src/app/redux/test-question/test-question.actions';

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

  retrieveAllQuestions() {
    this.store.dispatch(retrieveAllQuestions())
  }

  createTest(test: TestQuestion) {
    this.store.dispatch(createTest({test}))
  }
  
  createCandidateTest(candidateAnswer: CandidateAnswer[]) {
    this.store.dispatch(createCandidateTest({candidateAnswer}))
  }

  
}
