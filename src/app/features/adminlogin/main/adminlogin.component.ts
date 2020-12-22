import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/core/model/User.interface';
import { selectErrorMessage } from 'src/app/redux/login';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  errorMessage: string | null;
  loginForm: FormGroup;
  admin: User[]

  constructor(private store: Store, private adminLoginService: AdminLoginService, private fb: FormBuilder, private router: Router) {
    this.store.pipe(select(selectErrorMessage)).subscribe((errorMessage) => { return this.errorMessage = errorMessage });
  }
  ngOnInit(): void {
    //this.adminLoginService.retrieveAllUsers();
    this.loginForm= this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.adminLoginService.executeLogin(this.loginForm.value.username, this.loginForm.value.password);
    
    //this.router.navigateByUrl('/admin/panel');
  }

  }
  