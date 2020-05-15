import { Page } from 'puppeteer';

describe('Google', () => {
  let page: Page;
  beforeAll(async () => {
    page = (await (global as any).__BROWSER__.newPage()) as Page;
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(await page.title()).toMatch('Google');
  });
});
