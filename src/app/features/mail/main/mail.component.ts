import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Mail } from 'src/app/core/model/Mail.interface';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})




export class MailComponent implements OnInit {

  sender: FormGroup;

  
  constructor(private store: Store, private fb: FormBuilder, private router: Router) { 
  
  }
  
  ngOnInit(): void {
    this.sender= this.fb.group({
      smtpServer: ['smtp.gmail.com', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      mittente: ['', Validators.required],
      destinatario: ['', Validators.required],
      cc: ['', Validators.required],
      oggetto: ['', Validators.required],
      testo: ['', Validators.required],
    })
  }

  sendEmailLog(){
    let mail: Mail = {
      smtpServer: this.sender.value.smtpServer,
	    username: this.sender.value.username,
	    password: this.sender.value.password,
      mittente: this.sender.value.mittente,
	    destinatario: this.sender.value.destinatario,
    	cc: this.sender.value.cc,
	    oggetto: this.sender.value.iggetto,
    	testo: this.sender.value.testo,
    }
    console.log("sender BOIIII",this.sender.value)
  }

  
  
}







