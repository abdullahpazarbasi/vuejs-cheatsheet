<template>
  <div class="card">
    <h2>teleport</h2>

    <button @click="open = true">Open modal</button>

    <Teleport to="body">
      <div
        v-if="open"
        class="overlay"
        @click="open = false"
      >
        <div
          class="modal"
          @click.stop
        >
          <p><strong>Teleported Modal</strong></p>
          <p class="muted">This element is rendered under <code>body</code>.</p>
          <button @click="open = false">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: grid;
  place-items: center;
}

.modal {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  min-width: 280px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.muted {
  opacity: 0.75;
}
</style>
