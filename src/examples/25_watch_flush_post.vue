<template>
  <div class="card">
    <h2>watch flush: post</h2>

    <button @click="items.push(items.length + 1)">Add item</button>

    <ul
      ref="listEl"
      class="list"
    >
      <li
        v-for="n in items"
        :key="n"
      >
        {{ n }}
      </li>
    </ul>

    <p>
      Last measured height: <strong>{{ lastHeight }}</strong>
    </p>

    <p class="note">
      <code>flush: 'post'</code> runs after DOM updates, useful for DOM measurements.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const items = ref<number[]>([1, 2, 3]);
const listEl = ref<HTMLUListElement | null>(null);
const lastHeight = ref<number | null>(null);

watch(
  items,
  () => {
    lastHeight.value = listEl.value?.getBoundingClientRect().height ?? null;
  },
  { deep: true, flush: 'post' }
);
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.list {
  margin-top: 0.75rem;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
