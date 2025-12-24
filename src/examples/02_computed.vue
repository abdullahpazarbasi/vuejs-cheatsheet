<template>
  <div class="card">
    <h2>computed</h2>

    <div class="row">
      <label>
        Price
        <input
          type="number"
          v-model.number="price"
        />
      </label>

      <label>
        Quantity
        <input
          type="number"
          v-model.number="qty"
        />
      </label>
    </div>

    <p>
      Total: <strong>{{ total }}</strong>
    </p>
    <p class="note">Derived state only. No side-effects inside <code>computed</code>.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const price = ref(10);
const qty = ref(2);

const total = computed(() => price.value * qty.value);
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 1rem;
}
.row {
  display: flex;
  gap: 1rem;
}
label {
  display: grid;
  gap: 0.25rem;
}
.note {
  opacity: 0.75;
}
</style>
