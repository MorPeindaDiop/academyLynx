import { Time } from '@angular/common';

export interface Candidate {
    id: number;
    name: string;
    surname: string;
    dataTest: Date;
    idSeniority: number;
    score: number;
    time: Time;
}