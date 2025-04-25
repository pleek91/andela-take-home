import type { ScoreCard } from "@/types/scoreCard";
import type { Candidate } from "@/types/candidate";
import type { Role } from "@/types/role";
import { createScoreCard } from "@/types/scoreCard";
import type { Stage } from "@/types/stage";
import { faker } from "@faker-js/faker";
import { getPreviousStages, getStage } from "./stages";
import { repeat } from "@/utilities/repeat";

const scoreCards: ScoreCard[] = []
const scoreCardsById = new Map<ScoreCard['id'], ScoreCard>();
const scoreCardsByCandidateId = new Map<ScoreCard['candidateId'], ScoreCard[]>();

function mockScore(): number {
  return faker.number.int({ min: 2, max: 5 });
}

type MockScoreCard = {
  candidateId: Candidate['id'];
  roleId: Role['id'];
  stageId: Stage['id'];
}

function mockScoreCard({ candidateId, roleId, stageId }: MockScoreCard): ScoreCard {
  const scoreCard = createScoreCard({
    candidateId,
    roleId,
    stageId,
    score: mockScore(),
    notes: faker.lorem.paragraph(),
  })

  scoreCards.push(scoreCard)
  scoreCardsById.set(scoreCard.id, scoreCard)
  scoreCardsByCandidateId.set(candidateId, [...(scoreCardsByCandidateId.get(candidateId) || []), scoreCard])

  return scoreCard
}

function seedScoreCards(candidates: Candidate[]): ScoreCard[] {
  scoreCards.slice(0, 0)
  scoreCardsById.clear()
  scoreCardsByCandidateId.clear()

  candidates.forEach((candidate) => {
    const stages = [ ...getPreviousStages(candidate.stageId), getStage(candidate.stageId) ]
  
    stages.forEach(stage => {
      const count = faker.number.int({ min: 1, max: 3 });
      const callback = () => mockScoreCard({ candidateId: candidate.id, roleId: candidate.roleId, stageId: stage.id })
  
      return repeat(count, callback)
    })
  })

  return scoreCards
}


function getScoreCard(scoreCardId: ScoreCard['id']): ScoreCard {
  const scoreCard = scoreCardsById.get(scoreCardId);

  if (!scoreCard) {
    throw new Error(`Score card with id ${scoreCardId} not found`);
  }

  return scoreCard;
}

function getScoreCardsByCandidateId(candidateId: Candidate['id']): ScoreCard[] {
  return scoreCardsByCandidateId.get(candidateId) || [];
}

export {
  seedScoreCards,
  scoreCards,
  getScoreCard,
  getScoreCardsByCandidateId,
}