// loader.mjs
import { URL } from 'url';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

const baseURL = new URL('./', import.meta.url);

export function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('@/')) {
    const resolved = specifier.replace('@/', join(dirname(baseURL.pathname), 'docs/.vitepress/') + '/');
    return nextResolve(resolved, context);
  }
  return nextResolve(specifier, context);
}