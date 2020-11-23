import { Time } from '@angular/common';

export interface Candidate {
    id?: number;
    name: string;
    surname: string;
    idSeniority: number;
    dataTest: Date;
    nCorrectAnswer?: number;
    weightedScore?: number;
    arithmeticScore?: number;
    fields?: [];
    time?: number;
}