import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/model/Question';
import { getCurrentNavigatedQuestion } from 'src/app/redux/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  questionForm: FormGroup;
  wrongAnswerForm: FormGroup;
  question: Question;

  constructor(private store: Store, private fb: FormBuilder, private questionService: QuestionService, private router: Router) {
    this.store.pipe(select(getCurrentNavigatedQuestion)).subscribe((question => this.question = question));
    
    this.questionForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      questionText: ['', Validators.required],
      difficulty: ['', Validators.required],
      correctAnswerBoolean: ['', Validators.required],
      correctAnswerText: ['', Validators.required],
      wrongAnswers: ['', Validators.required],
    })

    this.questionForm.patchValue({
      id: this.question.id,
      type: this.question.type,
      questionText: this.question.questionText,
      difficulty: this.question.difficulty,
      correctAnswerBoolean: this.question.correctAnswerBoolean,
      correctAnswerText: this.question.correctAnswerText,
      wrongAnswers: this.question.wrongAnswers,
    });
  }

  ngOnInit(): void {
    
  }

  save() {
    let editQuestion: Question = {
      ...this.questionForm.value
    }
    this.questionService.createQuestion(editQuestion);
    this.router.navigateByUrl('/admin/question');
  }

}
