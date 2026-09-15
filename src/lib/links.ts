const EXTERNAL_URL_PREFIX = 'http';

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export function isExternalUrl(href: string): boolean {
  return href.startsWith(EXTERNAL_URL_PREFIX);
}