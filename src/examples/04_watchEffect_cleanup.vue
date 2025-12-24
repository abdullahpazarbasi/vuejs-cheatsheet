<template>
  <div class="card">
    <h2>watchEffect + cleanup</h2>

    <label class="stack">
      Message
      <input v-model="message" />
    </label>

    <p>
      Status: <strong>{{ status }}</strong>
    </p>

    <p class="note">
      This simulates a debounced side-effect with cleanup.
      <code>watchEffect</code> auto-tracks dependencies used inside.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const message = ref('hello');
const status = ref('idle');

watchEffect((onCleanup) => {
  status.value = 'scheduled...';
  const t = window.setTimeout(() => {
    status.value = `applied: "${message.value}"`;
  }, 2000);

  onCleanup(() => {
    window.clearTimeout(t);
  });
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
