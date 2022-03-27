export const ifDev = <T>(value: T[]): T[] =>
  process.env.NODE_ENV === 'development' ? value : [];
