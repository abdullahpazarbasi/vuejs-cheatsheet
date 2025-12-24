<template>
  <div class="card">
    <h2>v-model with defineModel</h2>

    <MyInput v-model="value" />

    <p>
      Parent value: <strong>{{ value }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyInput from './06__MyInput.vue';

const value = ref('initial');
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.stack {
  display: grid;
  gap: 0.25rem;
  max-width: 360px;
}
</style>
