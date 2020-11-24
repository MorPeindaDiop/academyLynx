import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/model/Question';
import { selectQuestions } from 'src/app/redux/question';
import { ConfermaDatiService } from '../../conferma-dati/services/conferma-dati.service';
import { QuestionarioService } from '../services/questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  myForm: FormGroup;


  
  constructor(private store: Store, private questionService: QuestionarioService, private fb: FormBuilder) {

  }


  questions = [
    {type: "name", description : "What is my destiny ?", isHidden:false},
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

  get question(): Observable<Question[]> {
    return this.store.pipe(select(selectQuestions));
  }


  onSubmit() {

  }
  
}
