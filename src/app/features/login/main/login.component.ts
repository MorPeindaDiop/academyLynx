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
   
    //this.loginService.retrieveAllUsers();
   
    this.loginForm= this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      idCandidate: ['', Validators.required]
    })
   
  }

  login(){
    console.log(this.loginForm.value)
    this.loginService.executeLoginCandidate(this.loginForm.value.email,this.loginForm.value.password,this.loginForm.value.idCandidate)
  }
 

}
