import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer.interface';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { TestQuestion } from 'src/app/core/model/TestQuestion.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectCandidatesSkill } from 'src/app/redux/candidate-skill';
import { selectQuestions } from 'src/app/redux/question';
import { selectSeniorities } from 'src/app/redux/seniority';
import { selectTests } from 'src/app/redux/test-question';
import { QuestionarioService } from '../../questionario/services/questionario.service';
import { ConfermaDatiService } from './conferma-dati.service';

@Injectable({
  providedIn: 'root'
})
export class CreateQuestionarioService {

  tests: TestQuestion[] = [];
  candidate: Candidate; 
  candidateAnswers: CandidateAnswer[] = [];
  seniority: Seniority;
  candidateSkills: number[] = [];

  
  constructor(private store: Store, private confermaDatiService: ConfermaDatiService) { }

  createCandidateTest() {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.candidate = candidate });
  
    this.store.pipe(select(selectTests)).subscribe((tests) => { return this.tests = tests });

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

    this.confermaDatiService.retrieveAllQuestions();

    this.store.pipe(select(selectQuestions)).subscribe((question) => {
      for (let item of question) {
        for (let idSkill of this.candidateSkills) {
          if (item.difficulty >= this.seniority.minDifficulty && item.difficulty <= this.seniority.maxDifficulty && item.idSkill == idSkill) {
            let ca: CandidateAnswer = {
                idCandidate: 0,
                idQuestion: 0,
                idTest:0
            }
            this.candidateAnswers.push(ca)
          }
        }
      }
    });

    this.confermaDatiService.createCandidateTest(this.candidateAnswers);
  }
}
