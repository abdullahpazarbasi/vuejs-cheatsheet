import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: { double: (s) => s.count * 2 },
    actions: {
        inc() {
            this.count += 1;
        },
        dec() {
            this.count -= 1;
        },
    },
});
