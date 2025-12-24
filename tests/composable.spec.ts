import { describe, it, expect, vi } from 'vitest';
import { ref, nextTick } from 'vue';
import { useDebouncedRef } from '@/examples/13__useDebouncedRef';

describe('useDebouncedRef', () => {
    it('updates after delay', async () => {
        vi.useFakeTimers();

        const raw = ref('a');
        const debounced = useDebouncedRef(raw, 200);

        raw.value = 'b';
        await nextTick();

        expect(debounced.value).toBe('a');

        vi.advanceTimersByTime(200);
        expect(debounced.value).toBe('b');

        vi.useRealTimers();
    });
});
