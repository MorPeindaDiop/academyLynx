import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/User.interface';
import { selectUsers } from 'src/app/redux/login';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: Store, private loginService: LoginService, private fb: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.loginService.retrieveAllUsers();
    this.loginForm= this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    console.log(this.loginForm.value)
  }
  get users(): Observable<User[]> {
    return this.store.pipe(select(selectUsers));
  }
}
