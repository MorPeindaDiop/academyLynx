import { Component, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CountdownComponent } from 'ngx-countdown';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { CandidateResponse } from 'src/app/core/model/CandidateResponse.interface';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';
import { Question } from 'src/app/core/model/Question.interface';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectQuestions } from 'src/app/redux/question';
import { selectSeniorities } from 'src/app/redux/seniority';
import { selectCandidatesSkill } from 'src/app/redux/candidate-skill';
import { QuestionarioService } from '../services/questionario.service';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  rispostaForm: FormGroup;
  allQuestions = [];
  questions = [];
  candidate: Candidate;
  i: number = 0;
  candidateResponse: CandidateResponse[] = [];
  seniority: Seniority;
  candidateSkills: number[] = [];
  
  splitted = [];

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  constructor(private store: Store, private questionarioService: QuestionarioService, private fb: FormBuilder, private router: Router) {
    
    setTimeout(() => {
      this.goResult()
    }, 1800000);

    this.rispostaForm = this.fb.group({
      idQuestion: ['', Validators.required],
      candidateResponse: ['', Validators.required]
    })

  }

  ngOnInit() {

    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.candidate = candidate });

    this.store.pipe(select(selectSeniorities)).subscribe((seniorities) => { 
      for (let seniority of seniorities) {
        if (seniority.id == this.candidate.idSeniority) {
          return this.seniority = seniority;
        }
      }
    })

    this.store.pipe(select(selectCandidatesSkill)).subscribe((candidateSkills) => {
      for (let candidateSkill of candidateSkills) {
        if (candidateSkill.idCandidate == this.candidate.id) {
          this.candidateSkills.push(candidateSkill.idSkill)
        }
      }
    })

    this.questionarioService.retrieveAllQuestions();

    this.store.pipe(select(selectQuestions)).subscribe((question) => {
      for (let item of question) {
        for (let idSkill of this.candidateSkills) {
          if (item.difficulty >= this.seniority.minDifficulty && item.difficulty <= this.seniority.maxDifficulty && item.idSkill == idSkill) {
            this.allQuestions.push(item)
            this.split(item);
          }
        }
      }

      this.shuffle(this.allQuestions);
      for (var i = 0; i < this.allQuestions.length; i++) {
        this.questions.push({ question: this.allQuestions[i], isHidden: (i == 0 ? false : true) })
      }
      return this.questions
    });
  }

  split(question: Question) {

    if (question.type == 'crocette') {
      let answers = question.wrongAnswers.split(";");
      answers.push(question.correctAnswerText);
      this.shuffle(answers);
      this.splitted.push({ idQuestion: question.id, array: answers });
    }
  }

  addResponse(id: number) {
    let candidateAnswer: CandidateResponse = {
      idCandidate: this.candidate.id,
      idQuestion: id,
      candidateResponse: this.rispostaForm.value.candidateResponse != null ? this.rispostaForm.value.candidateResponse : ''
    }

    this.candidateResponse.push(candidateAnswer)
    this.rispostaForm.reset();
  }

  goResult() {
    console.log(this.candidateResponse)
    this.questionarioService.createCandidateAnswer(this.candidateResponse);
    this.router.navigateByUrl('/risultato');
  }
   
}
