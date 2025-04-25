import { seedCandidates } from "./candidates";
import { seedRoles } from "./roles";
import { seedStages } from "./stages";
import { seedScoreCards } from "./scoreCards";

export function seed(): void {
  const stages = seedStages()
  const roles = seedRoles()
  const candidates = seedCandidates(roles, stages)
  seedScoreCards(candidates)
}