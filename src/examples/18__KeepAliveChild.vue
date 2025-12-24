<template>
  <div class="child">
    <p>
      Child counter: <strong>{{ n }}</strong>
    </p>
    <button @click="n++">Increment</button>

    <p class="muted">Status: {{ status }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue';

const n = ref(0);
const status = ref('active');

onActivated(() => {
  status.value = 'activated';
});

onDeactivated(() => {
  status.value = 'deactivated';
});
</script>

<style scoped>
.child {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border: 1px dashed rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.muted {
  opacity: 0.75;
}
</style>
