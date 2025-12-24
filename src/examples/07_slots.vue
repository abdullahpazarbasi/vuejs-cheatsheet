<template>
  <div class="card">
    <h2>slots + scoped slots</h2>

    <Panel>
      <template #default> Default slot content. </template>

      <template #actions>
        <button @click="clicked++">Action</button>
      </template>

      <template #row="{ item }">
        <span
          >Scoped row: <strong>{{ item }}</strong></span
        >
      </template>
    </Panel>

    <p>
      Clicked: <strong>{{ clicked }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Panel from './07__Panel.vue';

const clicked = ref(0);
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.panel {
  border: 1px dashed rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0.75rem;
  display: grid;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.rows {
  display: grid;
  gap: 0.25rem;
}
.row {
  padding: 0.25rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
