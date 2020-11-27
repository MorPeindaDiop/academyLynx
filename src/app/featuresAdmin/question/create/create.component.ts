import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/core/model/Question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  answer1: string = '';
  answer2: string = '';
  answer3: string = '';
  wrongAnswers: string;
  questionForm: FormGroup;
  //wrongAnswersForm: FormGroup;

  constructor(private fb: FormBuilder, private questionService: QuestionService, private router: Router) {
    
    this.questionForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      questionText: ['', Validators.required],
      difficulty: ['', Validators.required],
      correctAnswerBoolean: ['', Validators.required],
      correctAnswerText: ['', Validators.required],
      wrongAnswers: [this.answer1 + ";" + this.answer2 + ";" +this.answer3, Validators.required],
    })
    
  }
  
  ngOnInit(): void {
  }

  save() {
    console.log("oook")
    console.log(this.answer1)
    console.log(this.answer2)
    console.log(this.answer3)

    let question: Question = {
      ...this.questionForm.value
    }
    this.questionService.createQuestion(question);
    this.router.navigateByUrl('/admin/question');
  }

}
