<template>
  <Dialog v-model:open="isOpen">
    <div>
      <h1 class="text-2xl font-bold">Candidate Details</h1>
    </div>
    <div>
      <ul>
        <li><span class="font-medium">Name:</span> <span class="text-gray-300">{{ candidate.name }}</span></li>
        <li><span class="font-medium">Role:</span> <span class="text-gray-300">{{ getRole(candidate.roleId).name }}</span></li>
        <li><span class="font-medium">Stage:</span> <span class="text-gray-300">{{ getStage(candidate.stageId).name }}</span></li>
        <li><span class="font-medium">Phone:</span> <span class="text-gray-300">{{ candidate.phone }}</span></li>
        <li><span class="font-medium">Email:</span> <span class="text-gray-300">{{ candidate.email }}</span></li>
        <li><span class="font-medium">Average Score:</span> <span class="text-gray-300">{{ averageScore.toPrecision(2) }}</span></li>
      </ul>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/components/Dialog.vue";
import type { Candidate } from "@/types/candidate";
import { getScoreCardsByCandidateId } from "@/data/scoreCards";
import { computed } from "vue";
import { getRole } from "@/data/roles";
import { getStage } from "@/data/stages";

const isOpen = defineModel<boolean>('open', { required: true });

const props = defineProps<{
  candidate: Candidate;
}>();


const averageScore = computed(() => {
  const scoreCards = getScoreCardsByCandidateId(props.candidate.id)
  const totalScore = scoreCards.reduce((acc, scoreCard) => acc + scoreCard.score, 0);

  return totalScore / scoreCards.length;
});
</script>