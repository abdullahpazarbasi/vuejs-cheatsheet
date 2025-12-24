import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/examples/16__counter';

describe('counter store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('increments/decrements and computes getter', () => {
        const s = useCounterStore();
        expect(s.count).toBe(0);
        expect(s.double).toBe(0);

        s.inc();
        s.inc();
        expect(s.count).toBe(2);
        expect(s.double).toBe(4);

        s.dec();
        expect(s.count).toBe(1);
        expect(s.double).toBe(2);
    });
});
