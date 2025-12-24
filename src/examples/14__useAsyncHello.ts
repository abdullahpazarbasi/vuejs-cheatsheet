import { defineAsyncComponent } from 'vue';

export const AsyncHello = defineAsyncComponent({
    loader: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return import('./14__AsyncHello.vue');
    },
    loadingComponent: () => import('./14__AsyncHelloLoading.vue'),
    errorComponent: () => import('./14__AsyncHelloError.vue'),
    delay: 0,
    timeout: 2000,
});
