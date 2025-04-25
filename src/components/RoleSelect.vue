<template>
  <select v-model="selected">
    <option value="">All Roles</option>
    <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
  </select>
</template>

<script setup lang="ts">
import type { Role } from '@/types/role';
import { roles } from '@/data/roles';

const selected = defineModel<Role['id']>('selected', { required: true });
</script>