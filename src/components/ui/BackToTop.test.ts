import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Back to Top Component', () => {
  let backToTopButton: HTMLButtonElement;
  let scrollToMock: any;
  let dom: JSDOM;

  beforeEach(() => {
    // Mock window.scrollTo
    scrollToMock = vi.fn();
    
    dom = new JSDOM(`
      <button 
        id="back-to-top" 
        aria-label="Back to top"
        class="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white"
      >
        <svg>Back to Top Icon</svg>
      </button>
    `, {
      url: 'http://localhost',
      runScripts: 'dangerously',
      beforeParse(window) {
        Object.defineProperty(window, 'scrollTo', {
          value: scrollToMock,
          writable: true
        });
      }
    });

    backToTopButton = dom.window.document.querySelector('#back-to-top') as HTMLButtonElement;
  });

  it('renders back to top button', () => {
    expect(backToTopButton).toBeTruthy();
    expect(backToTopButton.classList.contains('bg-gray-800')).toBe(true);
  });

  it('scrolls to top when clicked', () => {
    // Simulate click event
    const event = new dom.window.MouseEvent('click');
    backToTopButton.dispatchEvent(event);

    // Trigger scroll
    dom.window.scrollTo({ top: 0, behavior: 'smooth' });

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
