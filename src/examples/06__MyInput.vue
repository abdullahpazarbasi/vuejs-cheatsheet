<template>
  <label class="stack">
    Child input
    <input
      :value="model"
      @input="model = ($event.target as HTMLInputElement).value"
    />
  </label>
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: true });
</script>
