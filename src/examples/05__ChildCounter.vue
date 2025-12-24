<template>
  <div class="child">
    <button @click="inc">Increment (child)</button>
    <span
      >child n: <strong>{{ n }}</strong></span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  start: number;
}>();

const emit = defineEmits<{
  (e: 'changed', value: number): void;
}>();

const n = ref(props.start);

function inc() {
  n.value += 1;
  emit('changed', n.value);
}
</script>
