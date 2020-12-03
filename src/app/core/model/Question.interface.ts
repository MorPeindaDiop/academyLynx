export interface Question {
    id: number;
    type: string;
    questionText: string;
    correctAnswerBoolean: boolean;
    correctAnswerText: string;
    wrongAnswers: string;
    difficulty: number;
    idSkill: number;
    creation_time?: Date;
    updateTime?: Date;
    creationUser?: string;
    updateUser?: string;
    imgUrl?: string | ArrayBuffer;
}