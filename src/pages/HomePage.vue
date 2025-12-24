<template>
  <section>
    <h1>Examples</h1>
    <p class="muted">Each example isolates a single concept (as much as possible).</p>

    <ul class="list">
      <li
        v-for="ex in examples"
        :key="ex.id"
        class="item"
      >
        <RouterLink :to="`/examples/${ex.id}`">
          <strong>{{ ex.title }}</strong>
        </RouterLink>
        <div class="desc">{{ ex.description }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { examples } from '@/examples/registry';
</script>

<style scoped>
.muted {
  opacity: 0.75;
}

.list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  gap: 0.75rem;
}

.item {
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

.desc {
  margin-top: 0.25rem;
  opacity: 0.75;
  font-size: 0.95rem;
}
</style>
