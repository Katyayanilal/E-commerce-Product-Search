import { Page, test as baseTest } from "@playwright/test";
import { HomePage } from "../PageObject/01HomePage";
import { SearchResult } from "../PageObject/SearchResultsPage";

export * from '@playwright/test';
type pages = {
    home: HomePage;
    search: SearchResult;
};

export var page: Page;
export const testPages = baseTest.extend<pages>({
    page: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await page.goto('/', { waitUntil: "load" });
        await use(page);
    },

    home: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new HomePage(page));
    },
    search: async ({ page: playwrightPage}, use: any) => {
        page = playwrightPage
        await use(new HomePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
export const scenario = test;
export const step = test.step;
export const feature = test.describe;
export const beforeTest = test.beforeEach;
export const beforeAll = test.beforeAll;
export const afterTest = test.afterEach;
export const afterAll = test.afterAll;