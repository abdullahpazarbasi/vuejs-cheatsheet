<template>
  <div class="card">
    <h2>watch</h2>

    <label class="stack">
      Search term
      <input
        v-model="term"
        placeholder="type to trigger watch"
      />
    </label>

    <p>
      Last change: <strong>{{ lastChange }}</strong>
    </p>

    <p class="note">
      <code>watch</code> listens to a specific source. Useful for targeted side-effects.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const term = ref('');
const lastChange = ref('—');

watch(term, (n, o) => {
  lastChange.value = `from "${o}" to "${n}"`;
});
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
}
</style>
