import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { deleteCandidate } from 'src/app/redux/candidate/candidate.actions';
import { getCurrentUser } from 'src/app/redux/login';
import { Candidate } from '../model/Candidate.interface';
import { User } from '../model/User.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioGuard implements CanActivate {
  candidate: Candidate;
  user:User;
  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(getCurrentUser)).subscribe(user => { return this.user = user });
    this.store.pipe(select(getCurrentCandidate)).subscribe(candidate => { return this.candidate = candidate });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.candidate != null||this.user) {
      return true;
    }
    this.router.navigateByUrl("/form");
    return false;
  }

}
