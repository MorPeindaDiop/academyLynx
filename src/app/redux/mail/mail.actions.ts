import { createAction, props } from "@ngrx/store";
import { Mail } from "../../core/model/Mail.interface";
import { Response } from 'src/app/core/model/Response.interface';

//send mail
export const sendMail = createAction('[mail] send mail', props<{mail: Mail}>());
export const initResponse = createAction('[mail] init response', props<{response: Response}>());



// export const initCandidates = createAction('[Candidate] init candidates', props<{response: Response}>());
// 



// //crea candidato
// export const createCandidate = createAction('[Candidate] create candidate', props<{candidate: Candidate}>());

// //score
// export const setCandidateScore = createAction('[Candidate] candidateScore', props<{idCandidate: number}>());

// //delete candidato
// export const deleteCandidate = createAction('[Candidate] deleteCandidate', props<{idCandidate: number}>());