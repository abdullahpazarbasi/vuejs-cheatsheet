<template>
  <div class="card">
    <h2>Custom directive (v-focus)</h2>

    <label class="stack">
      Autofocused input
      <input
        v-focus
        placeholder="should auto-focus"
      />
    </label>

    <p class="note">Local directive declared in <code>&lt;script setup&gt;</code>.</p>
  </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue';

const vFocus: Directive<HTMLInputElement, void> = {
  mounted(el) {
    el.focus();
  },
};
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.stack {
  display: grid;
  gap: 0.25rem;
  max-width: 360px;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
