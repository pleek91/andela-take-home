import { v4 as uuidv4 } from 'uuid';
import type { Candidate } from './candidate';
import type { Role } from './role'; 
import type { Stage } from './stage';
import { addTimestamps, updateTimestamps, type Timestamps } from './timestamps';

export type ScoreCard = {
  id: string;
  roleId: Role['id'];
  candidateId: Candidate['id'];
  stageId: Stage['id'];
  notes?: string;
  score: number;
} & Timestamps;

type ScoreCardCreate = Omit<ScoreCard, 'id' | keyof Timestamps>;

export function createScoreCard(candidate: ScoreCardCreate): ScoreCard {
  return addTimestamps({
    id: uuidv4(),
    ...candidate,
  });
}

type ScoreCardUpdate = Partial<ScoreCardCreate>;

export function updateScoreCard(scoreCard: ScoreCard, update: ScoreCardUpdate): ScoreCard {
  return updateTimestamps({
    ...scoreCard,
    ...update,
  });
}