import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ComputedExample from '@/examples/02_computed.vue';

describe('computed example', () => {
    it('computes total from inputs', async () => {
        const w = mount(ComputedExample);
        const inputs = w.findAll('input');

        await inputs[0].setValue('7');
        await inputs[1].setValue('3');

        expect(w.text()).toContain('Total:');
        expect(w.text()).toContain('21');
    });
});
