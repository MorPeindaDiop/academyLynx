import { TestBed } from '@angular/core/testing';

import { CreateQuestionarioService } from './create-questionario.service';

describe('CreateQuestionarioService', () => {
  let service: CreateQuestionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuestionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
