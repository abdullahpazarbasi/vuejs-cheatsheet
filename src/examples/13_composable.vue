<template>
  <div class="card">
    <h2>composable (useDebouncedRef)</h2>

    <label class="stack">
      Raw input
      <input v-model="raw" />
    </label>

    <p>
      Debounced: <strong>{{ debounced }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDebouncedRef } from '@/examples/13__useDebouncedRef';

const raw = ref('type...');
const debounced = useDebouncedRef(raw, 400);
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
</style>
