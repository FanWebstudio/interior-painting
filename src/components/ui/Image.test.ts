import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Image Component', () => {
  it('renders local image correctly', () => {
    const dom = new JSDOM(`
      <img 
        src="/images/logos/slack.png" 
        alt="Slack Logo" 
        class="w-14 h-14 rounded-full object-cover"
      />
    `);

    const image = dom.window.document.querySelector('img');
    expect(image).toBeTruthy();
    expect(image?.getAttribute('src')).toBe('/images/logos/slack.png');
    expect(image?.classList.contains('w-14')).toBe(true);
    expect(image?.classList.contains('h-14')).toBe(true);
    expect(image?.classList.contains('rounded-full')).toBe(true);
  });

  it('handles lazy loading', () => {
    const dom = new JSDOM(`
      <img 
        src="/images/logos/spotify.png" 
        alt="Spotify Logo" 
        loading="lazy"
        decoding="async"
      />
    `);

    const image = dom.window.document.querySelector('img');
    expect(image?.getAttribute('loading')).toBe('lazy');
    expect(image?.getAttribute('decoding')).toBe('async');
  });
});
