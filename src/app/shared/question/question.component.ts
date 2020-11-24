import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/core/model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {


  @Input()
  question: Question;
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

  constructor() { }

  

  ngOnInit(): void { 
    console.log("siamo dentro al componente question");
    console.log(this.question);
    if(this.question.wrongAnswers!=null){
      this.splitted = this.question.wrongAnswers.split(";");
      this.splitted.push(this.question.correctAnswerText);
      this.shuffle(this.splitted);
    }
    
  }

}
