<template>
  <Card is="button" @click="open" v-bind="$attrs" class="grid grid-cols-1 gap-1 cursor-pointer">
    <div class="text-md font-bold">{{ candidate.name }}</div>
    <div class="grid grid-cols-1">
      <div class="text-sm text-gray-400">{{ getRole(candidate.roleId).name }}</div>
      <div class="text-sm text-gray-500">Average Score: {{ score.toPrecision(2) }}</div>
    </div>
  </Card>

  <CandidateDialog v-model:open="isOpen" :candidate="candidate" />
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import CandidateDialog from "@/components/CandidateDialog.vue";
import type { Candidate } from "@/types/candidate";
import { getRole } from "@/data/roles";
import { getScoreCardsByCandidateId } from "@/data/scoreCards";
import { computed } from "vue";
import { useBoolean } from "@/compositions/useBoolean";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  candidate: Candidate;
}>();

const { value: isOpen, setTrue: open } = useBoolean(false);

const score = computed(() => {
  const cards = getScoreCardsByCandidateId(props.candidate.id);

  return cards.reduce((acc, card) => acc + card.score, 0) / cards.length;
});
</script>