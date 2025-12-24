<template>
  <div class="shell">
    <header class="header">
      <div class="brand">
        <strong>Vue 3.5 Cheatsheet</strong>
        <span class="muted">TS + Vite + Pinia + Router + Vitest</span>
      </div>

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.shell {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.muted {
  opacity: 0.7;
  font-size: 0.9rem;
}

.nav {
  display: flex;
  gap: 0.75rem;
}

.main {
  padding: 1rem;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>
