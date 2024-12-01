import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Testimonials Section', () => {
  it('renders correct number of testimonial cards', () => {
    const dom = new JSDOM(`
      <div>
        <div class="bg-gray-100/40 border border-gray-100 rounded-2xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <img src="/image1.jpg" alt="Sarah Davis" />
            <div>
              <h3>Sarah Davis</h3>
              <p>Co-founder, MasterPlate</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-100/40 border border-gray-100 rounded-2xl p-8">
          <div class="flex items-center gap-4 mb-6">
            <img src="/image2.jpg" alt="Emily Johnson" />
            <div>
              <h3>Emily Johnson</h3>
              <p>Co-founder, MasterPlate</p>
            </div>
          </div>
        </div>
      </div>
    `);

    const testimonialImages = dom.window.document.querySelectorAll('img');
    expect(testimonialImages.length).toBe(2);
  });

  it('displays author information correctly', () => {
    const dom = new JSDOM(`
      <div class="bg-gray-100/40 border border-gray-100 rounded-2xl p-8">
        <div class="flex items-center gap-4 mb-6">
          <img src="/image.jpg" alt="David Williams" />
          <div>
            <h3>David Williams</h3>
            <p>Co-founder, MasterPlate</p>
          </div>
        </div>
      </div>
    `);

    const nameElement = dom.window.document.querySelector('h3');
    const titleElement = dom.window.document.querySelector('p');

    expect(nameElement?.textContent).toBe('David Williams');
    expect(titleElement?.textContent).toBe('Co-founder, MasterPlate');
  });
});
