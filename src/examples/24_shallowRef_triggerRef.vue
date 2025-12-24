<template>
  <div class="card">
    <h2>shallowRef + triggerRef</h2>

    <div class="row">
      <button @click="mutateDeep">Mutate deep field (won't update)</button>
      <button @click="forceUpdate">triggerRef (forces update)</button>
      <button @click="replaceObject">Replace object (updates)</button>
    </div>

    <p>
      Value: <strong>{{ state.deep.count }}</strong>
    </p>

    <p class="note">
      <code>shallowRef</code> does not track deep mutations. Replace the object or call
      <code>triggerRef</code>.
    </p>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, triggerRef } from 'vue';

type State = {
  deep: {
    count: number;
  };
};

const state = shallowRef<State>({
  deep: { count: 0 },
});

function mutateDeep() {
  state.value.deep.count += 1;
}

function forceUpdate() {
  triggerRef(state);
}

function replaceObject() {
  state.value = {
    deep: { count: state.value.deep.count + 1 },
  };
}
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.note {
  opacity: 0.75;
  margin-top: 0.75rem;
}
</style>
