import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/core/model/Question.interface';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  questionForm: FormGroup;

  constructor(private fb: FormBuilder, private questionService: QuestionService, private router: Router) {
    
    this.questionForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      questionText: ['', Validators.required],
      difficulty: ['', Validators.required],
      correctAnswerBoolean: ['', Validators.required],
      correctAnswerText: ['', Validators.required],
      wrongAnswers: this.fb.group({ 
        answer1: ['', Validators.required],
        answer2: ['', Validators.required],
        answer3: ['', Validators.required],
      }),
    })
    
  }
  
  ngOnInit(): void {
  }

  save() {
    console.log("oook")
    console.log(this.questionForm.value)

    let question: Question = {
      id: this.questionForm.value.id,
      type: this.questionForm.value.type,
      questionText: this.questionForm.value.questionText,
      difficulty: this.questionForm.value.difficulty,
      correctAnswerBoolean: this.questionForm.value.correctAnswerBoolean,
      correctAnswerText: this.questionForm.value.correctAnswerText,
      wrongAnswers: this.questionForm.value.wrongAnswers.answer1 + ";" + this.questionForm.value.wrongAnswers.answer2 + ";" + this.questionForm.value.wrongAnswers.answer3
    }
    this.questionService.createQuestion(question);
    this.router.navigateByUrl('/admin/question');
  }

}
