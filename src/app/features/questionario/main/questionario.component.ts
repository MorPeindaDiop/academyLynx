import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  myForm: FormGroup;

  questions = [
    {type: "name", description : "What is your name ?", isHidden:false},
    {type: "email", description : "What is your email ?", isHidden:true},
    {type: "message", description : "What is your message ?", isHidden:true}
  ]

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit() {

  }
  
}
