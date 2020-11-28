export interface Seniority {
    id: number;
    level: string;
    description: string;
    minDifficulty?: number;
    maxDifficulty?: number;
    creation_time?: Date;
    update_time?: Date;
    creationUser?: string;
    updateUser?: string;
}