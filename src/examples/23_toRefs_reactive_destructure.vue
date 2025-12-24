<template>
  <div class="card">
    <h2>toRefs + reactive destructuring</h2>

    <p>
      <button @click="user.name = user.name === 'Ada' ? 'Linus' : 'Ada'">
        Toggle reactive.user.name
      </button>
    </p>

    <p>
      Direct: <strong>{{ user.name }}</strong>
    </p>
    <p>
      toRefs: <strong>{{ name }}</strong>
    </p>

    <p class="note">
      Destructuring a <code>reactive</code> object directly breaks reactivity. Use
      <code>toRefs</code> when you need separate refs.
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

const user = reactive({
  name: 'Ada',
});

const { name } = toRefs(user);
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
