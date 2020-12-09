import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/core/model/Question.interface';
import { Skill } from 'src/app/core/model/Skill.interface';
import { selectQuestions } from 'src/app/redux/question';
import { selectSkills } from 'src/app/redux/skill';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private store: Store, private questionService: QuestionService) {
  }

  
  ngOnInit(): void {
    this.questionService.retrieveAllQuestions();
    this.questionService.retrieveAllSkills();
  }

  get questions(): Observable<Question[]> {
    return this.store.pipe(select(selectQuestions));
  }

  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }

  delete(id: number) {
    this.questionService.deleteQuestion(id)
  }
  
}
