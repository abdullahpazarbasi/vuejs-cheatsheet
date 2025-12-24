<template>
  <p>
    Injected API says: <strong>{{ reply }}</strong>
  </p>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { ApiKey } from './08__Api';

const api = inject(ApiKey);
if (!api) {
  throw new Error('Api not provided');
}

const reply = api.ping();
</script>
