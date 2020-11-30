import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentCandidate } from 'src/app/redux/candidate';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.store.pipe(select(getCurrentCandidate)).subscribe(candidate => {return candidate}) != null) {
        //this.router.navigateByUrl("/questionario");
        return true;
      }
      this.router.navigateByUrl("/questionario");
      return false;
  }
  
}
