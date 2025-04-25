<template>
  <dialog ref="dialog" class="p-4 rounded-sm border bg-gray-800 border-gray-700 text-white w-96 shadow-2xl shadow-black/50 fixed inset-0 m-auto">
    <div class="flex flex-col gap-4">
      <slot />
      <button @click="close" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-sm">Close</button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const isOpen = defineModel<boolean>('open', { required: true });
const dialog = ref<HTMLDialogElement>();

const open = () => isOpen.value = true;
const close = () => isOpen.value = false;

watchEffect(() => {
  if (isOpen.value) {
    dialog.value?.showModal();
  } else {
    dialog.value?.close();
  }
});
</script>
