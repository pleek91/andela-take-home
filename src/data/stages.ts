import type { Stage } from "@/types/stage";
import { createStage } from "@/types/stage";

const stages: Stage[] = []
const stagesById = new Map<Stage['id'], Stage>();

function seedStages(): Stage[] {
  stages.push(
    createStage({ name: 'Applied', description: 'Applied to the role' }),
    createStage({ name: 'Screening', description: 'Screening the candidate' }),
    createStage({ name: 'Technical Interview', description: 'Technical Interview' }),
    createStage({ name: 'Manager Interview', description: 'Manager Interview' }),
    createStage({ name: 'Offer', description: 'Offering the candidate the role' }),
  )

  stages.forEach((stage) => {
    stagesById.set(stage.id, stage)
  })

  return stages
}

function getStage(stageId: Stage['id']): Stage {
  const stage = stagesById.get(stageId);

  if (!stage) {
    throw new Error(`Stage with id ${stageId} not found`);
  }

  return stage;
}

function getPreviousStage(stageId: Stage['id']): Stage {
  const index = stages.findIndex((stage) => stage.id === stageId);

  if (index === -1) {
    throw new Error(`Stage with id ${stageId} not found`);
  }

  return stages[index - 1];
}

function getPreviousStages(stageId: Stage['id']): Stage[] {
  const index = stages.findIndex((stage) => stage.id === stageId);

  if (index === -1) {
    throw new Error(`Stage with id ${stageId} not found`);
  }

  return stages.slice(0, index);
}

export {
  stages,
  getStage,
  seedStages,
  getPreviousStage,
  getPreviousStages,
}
