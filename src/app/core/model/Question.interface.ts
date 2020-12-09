export interface Question {
    id: number;
    type: string;
    questionText: string;
    correctAnswerBoolean: boolean;
    correctAnswerText: string;
    wrongAnswers: string;
    difficulty: number;
    idSkill: number;
    imgUrl?: string | ArrayBuffer;
}