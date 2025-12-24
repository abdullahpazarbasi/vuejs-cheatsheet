<template>
  <p>This component will throw during render.</p>
  <p>{{ boom() }}</p>
</template>

<script setup lang="ts">
function boom(): string {
  throw new Error('Intentional crash');
}
</script>
