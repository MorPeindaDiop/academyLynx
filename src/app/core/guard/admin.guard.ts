import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../model/User.interface';
import { getCurrentUser } from 'src/app/redux/login';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
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
    this.router.navigateByUrl("/adminlogin");
    return false;
  }
  
}
