import { v4 as uuidv4 } from 'uuid';
import type { Timestamps } from './timestamps';
import { addTimestamps } from './timestamps';

export type Stage = {
  id: string;
  name: string;
  description: string;
} & Timestamps;

export type StageCreate = Omit<Stage, 'id' | keyof Timestamps>;

export function createStage(stage: StageCreate): Stage {
  return addTimestamps({
    id: uuidv4(),
    ...stage,
  });
}