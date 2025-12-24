<template>
  <slot />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { Api, ApiKey } from './08__Api';

const api: Api = {
  ping: () => 'pong',
};

provide(ApiKey, api);
</script>
