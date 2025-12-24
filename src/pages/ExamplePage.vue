<template>
  <section v-if="entry">
    <div class="top">
      <div>
        <h1>{{ entry.title }}</h1>
        <p class="muted">{{ entry.description }}</p>
      </div>

      <RouterLink to="/">Back</RouterLink>
    </div>

    <component :is="entry.component" />
  </section>

  <section v-else>
    <h1>Example not found</h1>
    <RouterLink to="/">Back</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { getExampleById } from '@/examples/registry';

const route = useRoute();
const entry = computed(() => getExampleById(String(route.params.id)));
</script>

<style scoped>
.top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.muted {
  opacity: 0.75;
  max-width: 65ch;
}
</style>
