import { Component, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/core/model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  rispostaForm: FormGroup;

  @Input()
  questions: any;

  value: string;

  candidateAnswer: any[] = [];

  splitted: string[]=[];
  
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

  constructor(private fb: FormBuilder) {

    this.rispostaForm = this.fb.group({
      idQuestion: ['', Validators.required],
      value: [this.value, Validators.required]
    })
  }

  

  ngOnInit(): void { 
    console.log("siamo dentro al componente question");
    console.log(this.questions);
    // console.log(this.value);
    // if(this.questions.question.wrongAnswers!=null){
      
    // }

    // console.log("this.rispostaForm.value")
    // console.log(this.rispostaForm.value)
    
  }

  split (question: Question) {
    this.splitted = [];
    this.splitted = question.wrongAnswers.split(";");
    this.splitted.push(question.correctAnswerText);
    this.shuffle(this.splitted);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("question component")
    console.log(changes)

  }

  addResponse() {
    this.candidateAnswer.push(this.rispostaForm.value)
    console.log(this.candidateAnswer)
  }

}
