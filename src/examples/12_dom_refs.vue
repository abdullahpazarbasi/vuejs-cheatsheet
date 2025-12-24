<template>
  <div class="card">
    <h2>DOM refs</h2>

    <div class="row">
      <input
        ref="inputEl"
        placeholder="Click focus"
      />
      <button @click="focus">Focus input</button>
    </div>

    <p class="note">DOM refs are <code>T | null</code> for null-safety; use optional chaining.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputEl = ref<HTMLInputElement | null>(null);

function focus() {
  inputEl.value?.focus();
}
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.row {
  display: flex;
  gap: 0.75rem;
}
.note {
  opacity: 0.75;
}
</style>
