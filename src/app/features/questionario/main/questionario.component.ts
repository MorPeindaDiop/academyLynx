import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Question } from 'src/app/core/model/Question';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectQuestions } from 'src/app/redux/question';
import { QuestionarioService } from '../services/questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  
  rispostaForm: FormGroup;
  questions = [];
  idCandidate: number;

  candidateAnswers: any[] = [];

  splitted=[];
  
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  constructor(private store: Store, private questionService: QuestionarioService, private fb: FormBuilder) {

    this.rispostaForm = this.fb.group({
      idQuestion: ['', Validators.required],
      value: ['', Validators.required]
    })
    
  }

  ripristina() {
    this.rispostaForm.reset()
  }
  
  ngOnInit() : void{
    
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.idCandidate = candidate.id});

    this.questionService.retrieveAllQuestions();
    
    this.store.pipe(select(selectQuestions)).subscribe((question)=> {
      for(let item of question){
        
        this.questions.push({question: item, isHidden: (this.questions.length==0?false:true)})  
        
      }
      console.log(this.questions)
      return this.questions
    });
    console.log(this.split());
    this.split();
  }

  split() {

    //this.splitted = [];
    for(let item of this.questions){
      if(item.question.type=='crocette'){
        let answers=item.question.wrongAnswers.split(";");
        answers.push(item.question.correctAnswerText);
        this.shuffle(answers);
        this.splitted.push({idQuestion: item.question.id, array: answers});
        console.log("splitted: ", this.splitted);
      }
    }
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("changes")
    console.log(changes)

  }

  addResponse() {
    let candidateAnswer = {
      ...this.rispostaForm.value
    }
    this.candidateAnswers.push(candidateAnswer)
    console.log("addResponse()")
    console.log(this.candidateAnswers)
  }
  
}
