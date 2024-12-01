import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';

// Mock window methods
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true
});

// Add any global setup or mocks here
beforeEach(() => {
  // Reset all mocks before each test
  vi.resetAllMocks();
});
