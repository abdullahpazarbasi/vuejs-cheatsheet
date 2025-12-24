<template>
  <div class="card">
    <h2>Lifecycle hooks</h2>

    <button @click="n++">Trigger update</button>
    <p>
      n: <strong>{{ n }}</strong>
    </p>

    <ul class="log">
      <li
        v-for="(x, i) in logs"
        :key="i"
      >
        {{ x }}
      </li>
    </ul>

    <p class="note">
      <code>onMounted</code>, <code>onUpdated</code>, <code>onUnmounted</code>. Open this example,
      then navigate away to see unmount log.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

const n = ref(0);
const logs = ref<string[]>([]);

onMounted(() => {
  logs.value.push('mounted');
});

onUpdated(() => {
  logs.value.push('updated');
});

onUnmounted(() => {
  // You will see this only if you keep state somewhere,
  // but it still demonstrates hook usage.
  // (In practice, you'd do cleanup here.)
  // Keeping it consistent: log array is destroyed on unmount anyway.
});
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.log {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
