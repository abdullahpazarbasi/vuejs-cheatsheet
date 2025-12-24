<template>
  <div class="card">
    <h2>Error boundary (onErrorCaptured)</h2>

    <button @click="crash = !crash">
      {{ crash ? 'Render safe child' : 'Render crashing child' }}
    </button>

    <div class="box">
      <p
        v-if="error"
        class="error"
      >
        Caught error: {{ error }}
      </p>

      <Crasher v-if="!crash" />
      <SafeChild v-else />
    </div>

    <p class="note">Parent catches child render errors via <code>onErrorCaptured</code>.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import Crasher from '@/examples/19__Crasher.vue';
import SafeChild from '@/examples/19__SafeChild.vue';

const crash = ref(false);
const error = ref<string | null>(null);

onErrorCaptured((err) => {
  error.value = err instanceof Error ? err.message : String(err);
  // Return false to stop propagation. True would propagate to global handler.
  return false;
});
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.box {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
.error {
  color: #b00020;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
