import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Mail from 'nodemailer/lib/mailer';
import { sendMail } from 'src/app/redux/mail/mail.actions';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private store: Store) { }

  sendEmailService(smtpServer: string, 
    porta: string,
    username: string, 
    password: string, 
    destinatario: string, 
    cc:string,
    oggetto:string,
    testo:string){
    this.store.dispatch(sendMail({
                                  smtpServer,
                                  porta,
                                  username, 
                                  password, 
                                  destinatario, 
                                  cc,
                                  oggetto,
                                  testo}))

  }
}
