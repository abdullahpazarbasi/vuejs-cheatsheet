import type { Component } from 'vue';

export type ExampleEntry = Readonly<{
    id: string;
    title: string;
    description: string;
    component: Component;
}>;

import Ex01 from './01_ref_reactive.vue';
import Ex02 from './02_computed.vue';
import Ex03 from './03_watch.vue';
import Ex04 from './04_watchEffect_cleanup.vue';
import Ex05 from './05_props_emits.vue';
import Ex06 from './06_v_model_defineModel.vue';
import Ex07 from './07_slots.vue';
import Ex08 from './08_provide_inject.vue';
import Ex09 from './09_teleport.vue';
import Ex10 from './10_transition.vue';
import Ex11 from './11_template_directives.vue';
import Ex12 from './12_dom_refs.vue';
import Ex13 from './13_composable.vue';
import Ex14 from './14_async_component.vue';
import Ex15 from './15_suspense.vue';
import Ex16 from './16_pinia_store.vue';
import Ex17 from './17_lifecycle_hooks.vue';
import Ex18 from './18_keep_alive.vue';
import Ex19 from './19_error_captured.vue';
import Ex20 from './20_router_basics.vue';
import Ex21 from './21_custom_directive.vue';
import Ex22 from './22_defineExpose.vue';
import Ex23 from './23_toRefs_reactive_destructure.vue';
import Ex24 from './24_shallowRef_triggerRef.vue';
import Ex25 from './25_watch_flush_post.vue';

export const examples: ExampleEntry[] = [
    {
        id: '01',
        title: 'ref vs reactive',
        description: 'Primitive vs object reactivity and update semantics.',
        component: Ex01,
    },
    {
        id: '02',
        title: 'computed',
        description: 'Derived state only; no side-effects.',
        component: Ex02,
    },
    {
        id: '03',
        title: 'watch',
        description: 'Targeted reactive source watching.',
        component: Ex03,
    },
    {
        id: '04',
        title: 'watchEffect + cleanup',
        description: 'Auto-tracking dependencies with cleanup.',
        component: Ex04,
    },
    {
        id: '05',
        title: 'props + emits (typed)',
        description: 'Unidirectional data flow, typed events.',
        component: Ex05,
    },
    {
        id: '06',
        title: 'v-model with defineModel',
        description: 'Typed v-model in Vue 3.5.',
        component: Ex06,
    },
    {
        id: '07',
        title: 'slots + scoped slots',
        description: 'Default, named, and scoped slots.',
        component: Ex07,
    },
    {
        id: '08',
        title: 'provide/inject',
        description: 'Lightweight dependency injection.',
        component: Ex08,
    },
    {
        id: '09',
        title: 'teleport',
        description: 'Render outside component tree (e.g., modal).',
        component: Ex09,
    },
    {
        id: '10',
        title: 'transition',
        description: 'Enter/leave transitions with CSS classes.',
        component: Ex10,
    },
    {
        id: '11',
        title: 'template directives',
        description: 'v-if/v-show, v-for, class binding, modifiers.',
        component: Ex11,
    },
    {
        id: '12',
        title: 'DOM refs',
        description: 'Template ref to DOM node with null-safety.',
        component: Ex12,
    },
    {
        id: '13',
        title: 'composable',
        description: 'Reusable logic with useDebouncedRef.',
        component: Ex13,
    },
    {
        id: '14',
        title: 'async component',
        description: 'Manual async import + dynamic component.',
        component: Ex14,
    },
    {
        id: '15',
        title: 'Suspense',
        description: 'Fallback UI for async <script setup> component.',
        component: Ex15,
    },
    {
        id: '16',
        title: 'Pinia store',
        description: 'Minimal store with actions and getters.',
        component: Ex16,
    },
    {
        id: '17',
        title: 'Lifecycle hooks',
        description: 'onMounted/onUpdated/onUnmounted basics.',
        component: Ex17,
    },
    {
        id: '18',
        title: 'KeepAlive + activated/deactivated',
        description: 'Cache component state across toggles.',
        component: Ex18,
    },
    {
        id: '19',
        title: 'Error boundary (onErrorCaptured)',
        description: 'Catch child errors and show fallback.',
        component: Ex19,
    },
    {
        id: '20',
        title: 'Router basics',
        description: 'useRoute/useRouter + query & params.',
        component: Ex20,
    },
    {
        id: '21',
        title: 'Custom directive',
        description: 'Local directive example (v-focus).',
        component: Ex21,
    },
    {
        id: '22',
        title: 'defineExpose',
        description: 'Expose child methods to parent refs.',
        component: Ex22,
    },
    {
        id: '23',
        title: 'toRefs + reactive destructuring',
        description: 'Avoid losing reactivity when destructuring.',
        component: Ex23,
    },
    {
        id: '24',
        title: 'shallowRef + triggerRef',
        description: 'Control deep tracking and manual triggers.',
        component: Ex24,
    },
    {
        id: '25',
        title: 'watch flush: post',
        description: 'Run watcher after DOM updates.',
        component: Ex25,
    },
];

export function getExampleById(id: string): ExampleEntry | undefined {
    return examples.find((e) => e.id === id);
}
