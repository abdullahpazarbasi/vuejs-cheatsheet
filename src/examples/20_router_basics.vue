<template>
  <div class="card">
    <h2>Router basics (useRoute/useRouter)</h2>

    <p>
      Current route:
      <code>{{ route.fullPath }}</code>
    </p>

    <div class="row">
      <button @click="setQuery('a')">Set query q=a</button>
      <button @click="setQuery('b')">Set query q=b</button>
      <button @click="clearQuery">Clear query</button>
    </div>

    <p>
      Query q: <strong>{{ String(route.query.q ?? '—') }}</strong>
    </p>

    <p class="note">This example manipulates query params without leaving the page.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

async function setQuery(v: string) {
  await router.replace({ query: { ...route.query, q: v } });
}

async function clearQuery() {
  const q = { ...route.query };
  delete q.q;
  await router.replace({ query: q });
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
  flex-wrap: wrap;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
