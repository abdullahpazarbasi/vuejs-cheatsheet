export type Brand<T, B extends string> = T & { readonly __brand: B };

export type NonEmptyString = Brand<string, 'NonEmptyString'>;

export function asNonEmptyString(value: string): NonEmptyString {
    if (value.trim().length === 0) {
        throw new Error('Expected non-empty string');
    }
    return value as NonEmptyString;
}
