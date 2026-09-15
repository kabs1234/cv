const ORDINAL_DIGITS = 2;

export function formatOrdinal(value: number): string {
  return String(value).padStart(ORDINAL_DIGITS, '0');
}