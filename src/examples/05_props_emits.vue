<template>
  <div class="card">
    <h2>props + emits (typed)</h2>

    <ChildCounter
      :start="5"
      @changed="onChanged"
    />

    <p>
      Parent received: <strong>{{ received }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildCounter from './05__ChildCounter.vue';

const received = ref<number | null>(null);

function onChanged(value: number) {
  received.value = value;
}
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.child {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0 1rem;
}
</style>
