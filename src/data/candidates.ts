import { createCandidate } from "@/types/candidate";
import type { Candidate } from "@/types/candidate";
import type { Role } from "@/types/role";
import { faker } from "@faker-js/faker";
import type { Stage } from "@/types/stage";
import { repeat } from "@/utilities/repeat";

const candidates: Candidate[] = []
const candidatesById = new Map<Candidate['id'], Candidate>();

type MockCandidate = {
  roleId: Role['id'];
  stageId: Stage['id'];
}

function mockCandidate({ roleId, stageId }: MockCandidate): Candidate {
  return createCandidate({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'human' }),
    roleId,
    stageId,
  })
}

function seedCandidates(roles: Role[], stages: Stage[]): Candidate[] {
  roles.forEach((role) => {
    const count = faker.number.int({ min: 1, max: 10 });

    const candidatesForRole = repeat(count, () => {
      const stage = faker.helpers.arrayElement(stages)
      return mockCandidate({ roleId: role.id, stageId: stage.id })
    });

    candidatesForRole.forEach((candidate) => {
      candidates.push(candidate)
      candidatesById.set(candidate.id, candidate)
    })
  })

  return candidates
}

function getCandidateById(id: string): Candidate {
  const candidate = candidatesById.get(id);

  if (!candidate) {
    throw new Error(`Candidate with id ${id} not found`);
  }

  return candidate;
}

function getCandidatesByStageId(stageId: string): Candidate[] {
  return candidates.filter((candidate) => candidate.stageId === stageId);
}

export {
  seedCandidates,
  candidates,
  getCandidateById,
  getCandidatesByStageId,
}
