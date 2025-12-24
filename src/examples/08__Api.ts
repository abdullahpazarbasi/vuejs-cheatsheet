import type { InjectionKey } from 'vue';

export type Api = Readonly<{ ping: () => string }>;

export const ApiKey: InjectionKey<Api> = Symbol('ApiKey');
