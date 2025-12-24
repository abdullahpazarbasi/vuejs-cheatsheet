<template>
  <div class="panel">
    <div class="body">
      <slot />
    </div>

    <div class="rows">
      <div
        v-for="it in items"
        :key="it"
        class="row"
      >
        <slot
          name="row"
          :item="it"
        >
          <span>Fallback row: {{ it }}</span>
        </slot>
      </div>
    </div>

    <div class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ['a', 'b', 'c'];
</script>
