import { test, expect, type Page, type Browser, Locator } from '@playwright/test';

export class SearchResult {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get productList(): Locator {
    // return this.page.$$eval('p#article', (items) => items.map((item) => item.textContent));
    return this.page.locator('p#article');
  }

  get noResultsMessage() {
    return this.page.$('.no-results');
  }

  get products() {
    return this.page.$$eval('.product-item', (items) => items.map((item) => ({
      name: item.querySelector('.product-name')?.textContent,
      price: parseFloat(item.querySelector('.product-price')?.textContent || '0'),
      category: item.querySelector('.product-category')?.textContent
    })));
  }

  async navigateToNextPage() {
    await this.page.click('#next-page');
  }

  async getProductNames() {
    return this.page.$$eval('.product-name', (names) => names.map((name) => name.textContent));
  }
}