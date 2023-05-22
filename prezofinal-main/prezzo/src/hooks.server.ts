import type { HandleFetch } from '@sveltejs/kit';
import { url } from '$lib/config';

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
    if (request.url.startsWith(url)) {
      // Workaround: https://github.com/sveltejs/kit/issues/6608
      request.headers.set('origin', url)
    }
  
    return fetch(request)
  }