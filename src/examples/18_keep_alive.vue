<template>
  <div class="card">
    <h2>KeepAlive + activated/deactivated</h2>

    <button @click="show = !show">{{ show ? 'Hide' : 'Show' }} cached component</button>

    <KeepAlive>
      <KeepAliveChild v-if="show" />
    </KeepAlive>

    <p class="note">Toggle visibility. The child keeps its internal state while cached.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import KeepAliveChild from '@/examples/18__KeepAliveChild.vue';

const show = ref(true);
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
