import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/model/Question.interface';
import { Skill } from 'src/app/core/model/Skill.interface';
import { getCurrentNavigatedQuestion } from 'src/app/redux/question';
import { selectSkills } from 'src/app/redux/skill';
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
    
    this.questionService.retrieveAllSkills();
    
    this.questionForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      questionText: ['', Validators.required],
      difficulty: ['', Validators.required],
      correctAnswerBoolean: ['', Validators.required],
      correctAnswerText: ['', Validators.required],
      idSkill: ['', Validators.required],
      wrongAnswers: this.fb.group({ 
        answer1: ['', Validators.required],
        answer2: ['', Validators.required],
        answer3: ['', Validators.required],
      }),
    })
    
    if (this.question.type == 'crocette') {
      let answers = this.question.wrongAnswers.split(";");

      this.questionForm.patchValue({
        wrongAnswers: ({ 
          answer1: answers[0],
          answer2: answers[1],
          answer3: answers[2],
        }),
      });
    }
    
    this.questionForm.patchValue({
      id: this.question.id,
      type: this.question.type,
      idSkill: this.question.idSkill,
      questionText: this.question.questionText,
      difficulty: this.question.difficulty,
      correctAnswerBoolean: this.question.correctAnswerBoolean,
      correctAnswerText: this.question.correctAnswerText,
    });
  }

  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }

  ngOnInit(): void {
    
  }

  save() {
    let editQuestion: Question = {
      id: this.questionForm.value.id,
      type: this.questionForm.value.type,
      idSkill: this.questionForm.value.idSkill,
      questionText: this.questionForm.value.questionText,
      difficulty: this.questionForm.value.difficulty,
      correctAnswerBoolean: (this.questionForm.value.type == 'vf' ? this.questionForm.value.correctAnswerBoolean: null),
      correctAnswerText: (this.questionForm.value.type == 'vf' ? null:  this.questionForm.value.correctAnswerText),
      wrongAnswers: (this.questionForm.value.type == 'crocette' ? this.questionForm.value.wrongAnswers.answer1 + ";" + this.questionForm.value.wrongAnswers.answer2 + ";" + this.questionForm.value.wrongAnswers.answer3 : null)
    }
    this.questionService.createQuestion(editQuestion);
    this.router.navigateByUrl('/admin/question');
  }

}
