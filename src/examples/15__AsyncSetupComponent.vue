<template>
  <p>
    Async setup completed: <strong>{{ done }}</strong>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

await new Promise((r) => setTimeout(r, 1000));
const done = ref(true);
</script>
