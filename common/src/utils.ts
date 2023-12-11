export const isNill = <T extends any>(
  value: T
): value is Exclude<T, undefined> => value === null || value === undefined;

export const validId = (id: any): id is number => {
  if (isNill(id)) return false;
  if (typeof id !== "number") return false;
  if (id < 0) return false;
  return true;
};
