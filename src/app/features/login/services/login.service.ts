import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser, loginUserCandidate, retrieveAllUsers } from 'src/app/redux/login/login.actions';


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
