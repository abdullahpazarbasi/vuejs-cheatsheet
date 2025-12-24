<template>
  <div class="card">
    <h2>provide / inject</h2>

    <Provider>
      <Consumer />
    </Provider>
  </div>
</template>

<script setup lang="ts">
import Provider from './08__Provider.vue';
import Consumer from './08__Consumer.vue';
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
</style>
