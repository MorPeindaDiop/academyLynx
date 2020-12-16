import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Mail } from 'src/app/core/model/Mail.interface';
import { sendMail } from 'src/app/redux/mail/mail.actions';
import { MailService } from '../services/mail.service';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})




export class MailComponent implements OnInit {

  sender: FormGroup;

  
  constructor(private store: Store, private fb: FormBuilder, private router: Router, private mailService: MailService) { 
  
  }
  
  ngOnInit(): void {
    this.sender= this.fb.group({
      smtpServer: ['', Validators.required],
      porta: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      destinatario: ['', Validators.required],
      cc: ['', Validators.required],
      oggetto: ['', Validators.required],
      testo: ['', Validators.required],
    })

  }

  sendEmail(){
            console.log("sender BOIIII",this.sender.value)
   this.mailService.sendEmailService(
    this.sender.value.smtpServer,
    this.sender.value.porta,
    this.sender.value.username,
    this.sender.value.password,
    this.sender.value.destinatario,
    this.sender.value.cc,
    this.sender.value.oggetto,
    this.sender.value.testo
    

    )
    this.router.navigateByUrl("/emailSuccess")
  }

  // sendEmailLog(){
  //   let mail: Mail = {
  //     smtpServer: this.sender.value.smtpServer,
	//     username: this.sender.value.username,
	//     password: this.sender.value.password,
	//     destinatario: this.sender.value.destinatario,
  //   	cc: this.sender.value.cc,
	//     oggetto: this.sender.value.iggetto,
  //   	testo: this.sender.value.testo,
  //   }
 
    
  // }

  
  
}







