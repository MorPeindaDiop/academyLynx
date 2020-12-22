import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { getCurrentUser } from 'src/app/redux/login';
import { Candidate } from '../model/Candidate.interface';
import { User } from '../model/User.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidateLoginGuard implements CanActivate {
  candidate: Candidate;
  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(getCurrentCandidate)).subscribe(candidate => { return this.candidate = candidate });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.candidate != null) {
        return true;
      }
      this.router.navigateByUrl("/login");
      return false;
  }
}
