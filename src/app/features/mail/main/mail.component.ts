import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminLoginService } from '../../adminlogin/services/adminlogin.service';
import * as email from 'nativescript-email';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})




export class MailComponent implements OnInit {

  sender: FormGroup;

  
  constructor(private store: Store, private adminLoginService: AdminLoginService, private fb: FormBuilder, private router: Router) { 
  
  }

 
  
  ngOnInit(): void {
    this.sender= this.fb.group({
      adminMail: ['', Validators.required],
      password: ['', Validators.required],
      host: ['', Validators.required],
      body: ['', Validators.required],
      candidateMail: ['', Validators.required],
      cc: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }
  sendEmailLog(){
    console.log("sender BOIIII",this.sender.value)
  }

  
  
}







