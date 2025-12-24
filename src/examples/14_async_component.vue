<template>
  <div class="card">
    <h2>defineAsyncComponent</h2>

    <AsyncHello />
  </div>
</template>

<script setup lang="ts">
import { AsyncHello } from './14__useAsyncHello';
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
</style>
