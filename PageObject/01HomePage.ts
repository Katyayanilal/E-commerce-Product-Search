import { test, expect, type Page, type Browser, Locator } from '@playwright/test';

export class HomePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchFor(text: string) {
    try {
      const itemName = await this.page.locator(`//a[normalize-space(text())='${text}']`);
      await itemName.click();
      return itemName
    } catch (error) {
      console.error('Error in searchFor: ', error)
      throw error;
    }
  }

  // async searchInput(text: string) {
  //   const searchItem = this.searchFor(text)
  //   console.log(`Return Item - ${(await searchItem).textContent()}`)
  // }
}