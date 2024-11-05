import { Page, test as baseTest } from "@playwright/test";
import { LoginPage } from "../PageObject/loginPage";
import { signUp } from "../PageObject/signupPage";
import { SelectPage } from "../PageObject/selectPage";
import { OrderPage } from "../PageObject/orderPage";
import { AddToCart } from "../components/add-to-cart-component";

export * from '@playwright/test';
type pages = {
    login: LoginPage;
    signup: signUp;
    select: SelectPage;
    order: OrderPage;
    addCart: AddToCart
};

export var page: Page;
export const testPages = baseTest.extend<pages>({
    page: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await page.goto('/', { waitUntil: "load" });
        await use(page);
    },

    login: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new LoginPage(page));
    },

    signup: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new signUp(page));
    },

    select: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new SelectPage(page));
    },

    order: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new OrderPage(page));
    },

    addCart: async ({ page: playwrightPage }, use: any) => {
        page = playwrightPage
        await use(new AddToCart(page));
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