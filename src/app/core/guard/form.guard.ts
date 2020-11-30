import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { Candidate } from '../model/Candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanActivate {
  candidate: Candidate;
  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(getCurrentCandidate)).subscribe(candidate => {return this.candidate=candidate});
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.candidate == null) {
        //this.router.navigateByUrl("/questionario");
        console.log("bella per andrea")
        return true;
      }
      this.router.navigateByUrl("/form");
      console.log("bella per andrea1")
      return false;
  }
  
}
