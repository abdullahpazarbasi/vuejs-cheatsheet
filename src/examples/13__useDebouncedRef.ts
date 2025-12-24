import { ref, watch, type Ref } from 'vue';

export function useDebouncedRef<T>(source: Ref<T>, ms = 250): Ref<T> {
    const debounced = ref(source.value) as Ref<T>;
    let to: number | undefined;

    watch(source, (v) => {
        if (to !== undefined) {
            window.clearTimeout(to);
        }
        to = window.setTimeout(() => {
            debounced.value = v;
        }, ms);
    });

    return debounced;
}
