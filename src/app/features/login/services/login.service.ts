import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';
import { retrieveAllCandidateSkills } from 'src/app/redux/candidate-skill/candidate-skill.actions';
import { loginUser, loginUserCandidate, retrieveAllUsers } from 'src/app/redux/login/login.actions';
import { retrieveAllQuestions } from 'src/app/redux/question/question.actions';
import { retrieveAllSeniorities } from 'src/app/redux/seniority/seniority.actions';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private store: Store) { }

  retrieveAllUsers() {
    this.store.dispatch(retrieveAllUsers())
  }
  executeLoginCandidate(username: string, password: string, idCandidate: string) {
    console.log("STAMPO DAL SERVICE USER:",username," PW: ",password," idCandidate: ",idCandidate)
    this.store.dispatch(loginUserCandidate({username, password, idCandidate}))
    this.store.dispatch(retrieveAllCandidateSkills())
    this.store.dispatch(retrieveAllQuestions())
    this.store.dispatch(retrieveAllSeniorities())
  }

  
  // retrieveAllSeniorities() {
  //   this.store.dispatch(retrieveAllSeniorities())
  // }
  
  // createCandidate(candidate: Candidate){
  //   this.store.dispatch(createCandidate({candidate}))
  // }

  // createCandidateSkill(candidateSkill: CandidateSkill){
  //   this.store.dispatch(createCandidateSkill({candidateSkill}))
  // }

  
}
