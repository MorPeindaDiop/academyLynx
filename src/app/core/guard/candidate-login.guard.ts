import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'src/app/redux/login';
import { User } from '../model/User.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidateLoginGuard implements CanActivate {
  user: User;
  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(getCurrentUser)).subscribe(user => { return this.user = user });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.user != null) {
        return true;
      }
      this.router.navigateByUrl("/login");
      return false;
  }
}
