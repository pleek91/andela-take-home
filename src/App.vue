<template>
  <main class="h-screen w-screen bg-gray-900 grid grid-cols-1 grid-rows-[min-content_1fr] gap-2">
    <header class="p-4 border-b border-gray-200 bg-gray-950 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Candidate Pipeline</h1>
      <div class="flex gap-4">
        <RoleSelect v-model:selected="selectedRoleId" />
      </div>
    </header>
    <StagePipeline :role-id="selectedRoleId" />
  </main>
</template>

<script setup lang="ts">
import StagePipeline from '@/components/StagePipeline.vue';
import RoleSelect from "@/components/RoleSelect.vue";
import { ref } from 'vue';
import type { Role } from '@/types/role';

const selectedRoleId = ref<Role['id']>('');
</script>