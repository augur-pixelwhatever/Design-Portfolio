/** Matches basePath in next.config.mjs — required for static assets on GitHub Pages */
export const basePath = '/Design-Portfolio';

export function asset(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
