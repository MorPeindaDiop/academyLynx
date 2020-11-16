import { Time } from '@angular/common';

export interface Seniority {
    id: number;
    description: string;
    minDifficulty?: number;
    maxDifficulty?: number;
    creation_time?: Date;
    update_time?: Date;
    creationUser?: string;
    updateUser?: string;
}