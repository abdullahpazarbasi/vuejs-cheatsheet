<template>
  <div class="card">
    <h2>defineExpose</h2>

    <Child ref="child" />

    <div class="row">
      <button @click="child?.reset()">Call child.reset()</button>
      <button @click="child?.inc()">Call child.inc()</button>
    </div>

    <p class="note">Parent can call exposed methods via component ref.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from '@/examples/22__ExposeChild.vue';

type Exposed = {
  inc: () => void;
  reset: () => void;
};

const child = ref<Exposed | null>(null);
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
  margin-top: 0.75rem;
  flex-wrap: wrap;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
