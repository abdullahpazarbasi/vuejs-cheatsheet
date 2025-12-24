<template>
  <div class="card">
    <h2>Pinia store</h2>

    <div class="row">
      <button @click="counter.dec()">-</button>
      <strong>{{ counter.count }}</strong>
      <button @click="counter.inc()">+</button>
    </div>

    <p>
      Double (getter): <strong>{{ counter.double }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/examples/16__counter';
const counter = useCounterStore();
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
