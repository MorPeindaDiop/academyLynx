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
  question = new FormControl();
  questions =[];
  
  constructor(private store: Store, private questionService: QuestionarioService, private fb: FormBuilder) {

  }


  
  ngOnInit() : void{

    this.questionService.retrieveAllQuestions();
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
    this.store.pipe(select(selectQuestions)).subscribe((question)=> {
      for(let item of question){
        
        this.questions.push({question: item, isHidden: (this.questions.length==0?false:true)})  
        
      }
      console.log(this.questions)
      return this.questions });
  }
  

  // get questions(): Observable<Question[]> {
  //   return this.store.pipe(select(selectQuestions));
  // }


  onSubmit() {

  }
  
}
