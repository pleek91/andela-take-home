<template>
  <div class="flex gap-4 p-4 overflow-auto">
    <div v-for="stage in stages" :key="stage.id" class="grid grid-cols-1 grid-rows-[auto_1fr] min-w-60 rounded-md gap-4">
      <div class="flex items-center gap-2">
        <h2 class="text-lg font-bold">{{ stage.name }}</h2>
        <Badge>{{ getCandidates(stage.id, roleId).length }}</Badge>
      </div>

      <div class="flex flex-col gap-2">
        <div v-for="candidate in getCandidates(stage.id, roleId)" :key="candidate.id">
          <CandidateCard :candidate="candidate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stages } from "@/data/stages";
import { getCandidatesByStageId } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard.vue";
import type { Role } from "@/types/role";
import type { Stage } from "@/types/stage";
import Badge from "@/components/Badge.vue";

const { roleId } = defineProps<{
  roleId: Role['id'];
}>();

function getCandidates(stageId: Stage['id'], roleId: Role['id']) {
  const allCandidates = getCandidatesByStageId(stageId);

  if (roleId) {
    return allCandidates.filter((candidate) => candidate.roleId === roleId);
  }
  
  return allCandidates;
}

</script>