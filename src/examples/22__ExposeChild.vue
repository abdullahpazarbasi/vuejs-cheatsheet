<template>
  <div class="child">
    <p>
      Child count: <strong>{{ n }}</strong>
    </p>
    <button @click="inc">Increment (child)</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const n = ref(0);

function inc() {
  n.value += 1;
}

function reset() {
  n.value = 0;
}

defineExpose({
  inc,
  reset,
});
</script>

<style scoped>
.child {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border: 1px dashed rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
