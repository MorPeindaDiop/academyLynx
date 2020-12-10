import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser, retrieveAllUsers } from 'src/app/redux/login/login.actions';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private store: Store) { }

  retrieveAllUsers() {
    this.store.dispatch(retrieveAllUsers())
  }
  executeLogin(username: string, password: string) {
    this.store.dispatch(loginUser({username, password}))
    //this.store.dispatch(retrieveAllProducts())
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
