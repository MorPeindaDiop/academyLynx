import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/User.interface';
import { selectUsers } from 'src/app/redux/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: Store, private loginService: LoginService, private fb: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.loginService.retrieveAllUsers();
    this.loginForm= this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){

  }
  get users(): Observable<User[]> {
    return this.store.pipe(select(selectUsers));
  }

}
