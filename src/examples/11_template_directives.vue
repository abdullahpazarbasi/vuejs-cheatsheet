<template>
  <div class="card">
    <h2>template directives</h2>

    <div class="row">
      <button @click="show = !show">Toggle v-if</button>
      <button @click="visible = !visible">Toggle v-show</button>
    </div>

    <p
      v-if="show"
      class="box"
    >
      Rendered with <code>v-if</code>
    </p>
    <p
      v-show="visible"
      class="box"
    >
      Toggled with <code>v-show</code>
    </p>

    <h3>v-for + key</h3>
    <ul class="list">
      <li
        v-for="n in items"
        :key="n"
        :class="['pill', { active: n === selected }]"
        @click="select(n)"
      >
        {{ n }}
      </li>
    </ul>

    <p>
      Selected: <strong>{{ selected }}</strong>
    </p>

    <p class="note">
      Click uses <code>@click.stop</code>-like behavior via method (kept simple). Class binding
      shows array + object style.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);
const visible = ref(true);

const items = [1, 2, 3, 4, 5];
const selected = ref<number>(items[0]!);

function select(n: number) {
  selected.value = n;
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
  margin-bottom: 0.75rem;
}
.box {
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
.list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.pill {
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  cursor: pointer;
  user-select: none;
}
.active {
  border-color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
}
.note {
  opacity: 0.75;
}
</style>
