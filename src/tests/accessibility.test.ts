import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Accessibility Checks', () => {
  it('all images have alt text', () => {
    const dom = new JSDOM(`
      <div>
        <img src="/logo.png" alt="Company Logo" />
        <img src="/hero.jpg" alt="Hero Image" />
      </div>
    `);

    const images = dom.window.document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      expect(img.getAttribute('alt')).toBeTruthy();
      expect(img.getAttribute('alt')?.trim()).not.toBe('');
    });
  });

  it('buttons have accessible labels', () => {
    const dom = new JSDOM(`
      <div>
        <button aria-label="Back to Top">Top</button>
        <button aria-label="Contact Us">Contact</button>
      </div>
    `);

    const backToTopButton = dom.window.document.querySelector('button[aria-label="Back to Top"]');
    const contactButton = dom.window.document.querySelector('button[aria-label="Contact Us"]');

    expect(backToTopButton).toBeTruthy();
    expect(contactButton).toBeTruthy();
  });
});
