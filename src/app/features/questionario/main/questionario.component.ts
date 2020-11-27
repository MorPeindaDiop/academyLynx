import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CandidateResponse } from 'src/app/core/model/CandidateResponse.interface';
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
  //i: number;
  candidateResponse: CandidateResponse[] = [];

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

  randomQuestion(question){
    
  }
  
  constructor(private store: Store, private questionarioService: QuestionarioService, private fb: FormBuilder, private router: Router) {

    this.rispostaForm = this.fb.group({
      idQuestion: ['', Validators.required],
      candidateResponse: ['', Validators.required]
    })
    
  }

  ripristina() {
    this.rispostaForm.reset()
  }
  
  ngOnInit() : void{
    
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.idCandidate = candidate.id});

    this.questionarioService.retrieveAllQuestions();
    
    this.store.pipe(select(selectQuestions)).subscribe((question)=> {
      for(let item of question){
        // if(this.i<question.length){

        // }
          
        this.questions.push({question: item, isHidden: (this.questions.length==0?false:true)})  
        this.split(item);
        //this.i++;
      }
      console.log(this.questions)
      return this.questions
    });
    // console.log(this.split());
    // this.split();
  }

  split(question: Question) {

    //this.splitted = [];
    // for(let item of this.questions){
      if(question.type=='crocette'){
        let answers=question.wrongAnswers.split(";");
        answers.push(question.correctAnswerText);
        this.shuffle(answers);
        this.splitted.push({idQuestion: question.id, array: answers});
        console.log("splitted: ", this.splitted);
      }
    //}
  }

  addResponse(id: number) {
    let candidateAnswer: CandidateResponse = {
      idCandidate: this.idCandidate,
      idQuestion: id,
      candidateResponse: this.rispostaForm.value.candidateResponse
    }

    this.candidateResponse.push(candidateAnswer)
    console.log("addResponse()")
    console.log(this.candidateResponse)
    
  }

  goResult(){
    this.questionarioService.createCandidateAnswer(this.candidateResponse);
    // this.questionarioService.setScoreCandidate(this.idCandidate);
    this.router.navigateByUrl('/risultato');

  }


  
}
