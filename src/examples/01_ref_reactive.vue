<template>
  <div class="card">
    <h2>ref vs reactive</h2>

    <div class="row">
      <button @click="count++">Increment ref</button>
      <span>
        count: <strong>{{ count }}</strong>
      </span>
    </div>

    <div class="row">
      <button @click="user.name = user.name === 'Ada' ? 'Linus' : 'Ada'">
        Toggle reactive object
      </button>
      <span>
        user.name: <strong>{{ user.name }}</strong>
      </span>
    </div>

    <p class="note">
      <code>ref</code> uses <code>.value</code> in script; template unwraps.
      <code>reactive</code> is deep reactive for objects.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const count = ref(0);

const user = reactive({
  name: 'Ada',
});
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
