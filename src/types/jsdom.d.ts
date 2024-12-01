declare module 'jsdom' {
  import { Window, Document } from 'happy-dom';

  export interface JSDOMOptions {
    url?: string;
    runScripts?: 'dangerously' | 'outside-only' | 'never';
    beforeParse?: (window: Window) => void;
  }

  export class JSDOM {
    window: Window;
    document: Document;

    constructor(html?: string, options?: JSDOMOptions);
  }
}
