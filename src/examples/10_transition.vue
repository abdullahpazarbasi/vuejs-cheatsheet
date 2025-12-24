<template>
  <div class="card">
    <h2>transition</h2>

    <button @click="open = !open">Toggle</button>

    <Transition name="fade">
      <p
        v-if="open"
        class="box"
      >
        Hello transition
      </p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const open = ref(true);
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
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
