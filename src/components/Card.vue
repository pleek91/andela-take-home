<template>
  <component :is class="block w-full text-left p-2 border bg-gray-800 border-gray-700 hover:bg-gray-700 rounded-sm">
    <slot />
  </component>
</template>

<script setup lang="ts">
  const { is = 'div' } = defineProps<{
    is?: string;
  }>();
</script>