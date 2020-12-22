export interface CandidateAnswer {
    idCandidate: number;
    idQuestion: number;
    idTest: number;
    answer?: string;
    isCorrect?: boolean;
}