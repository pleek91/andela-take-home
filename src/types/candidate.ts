import { v4 as uuidv4 } from 'uuid';
import { type Role } from './role';
import { type Stage } from './stage';
import { addTimestamps, updateTimestamps, type Timestamps } from './timestamps';

export type Candidate = {
  id: string;
  name: string;
  email: string;
  phone: string;
  roleId: Role['id'];
  stageId: Stage['id'];
} & Timestamps;

export type CandidateCreate = Omit<Candidate, 'id' | keyof Timestamps>;

export function createCandidate(candidate: CandidateCreate): Candidate {
  return addTimestamps({
    ...candidate,
    id: uuidv4(),
  });
}

export type CandidateUpdate = Partial<CandidateCreate>;

export function updateCandidate(candidate: Candidate, update: CandidateUpdate): Candidate {
  return updateTimestamps({
    ...candidate,
    ...update,
  });
}