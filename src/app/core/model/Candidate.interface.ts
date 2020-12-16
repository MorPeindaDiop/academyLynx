export interface Candidate {
    id?: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    idCandidate?:string;
    idSeniority: number;
    dataTest: Date;
    ncorrectAnswer: number;
    weightedScore?: number;
    arithmeticScore?: number;
    fields?: [];
    time?: number;
}