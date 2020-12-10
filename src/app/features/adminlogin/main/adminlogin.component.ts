import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/User.interface';
import { selectUsers } from 'src/app/redux/login';
import { LoginService } from '../../login/services/login.service';
import { AdminLoginService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  loginForm: FormGroup;
  admin: User[]

  constructor(private store: Store, private adminLoginService: AdminLoginService, private fb: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.adminLoginService.retrieveAllUsers();
    this.loginForm= this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.adminLoginService.executeLogin(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }
  }
  