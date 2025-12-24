<template>
  <div class="card">
    <h2>Suspense</h2>

    <Suspense>
      <template #default>
        <AsyncSetupComponent />
      </template>
      <template #fallback>
        <p>Fallback while async setup runs...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AsyncSetupComponent from './15__AsyncSetupComponent.vue';
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
</style>
