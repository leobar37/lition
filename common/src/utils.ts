export const isNill = <T extends any>(
  value: T
): value is Exclude<T, undefined> => value === null || value === undefined;
