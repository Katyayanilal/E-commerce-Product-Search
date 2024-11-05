import { Locator, Page } from "@playwright/test";

export class LoginPage {
    public page: Page;
    loginLink: Locator
    loginUsername: Locator
    loginPassword: Locator
    loginButton: Locator
    loginWelcomeMsg: Locator

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator("#login2");
        this.loginUsername = page.locator("#loginusername");
        this.loginPassword = page.locator("#loginpassword");
        this.loginButton = page.getByRole("button", { name: "Log in" });
        this.loginWelcomeMsg = page.locator("#nameofuser");
    }

    async loginAction(userName: string, userPassword: string) {
        await this.loginLink.click();
        await this.loginUsername.fill(userName);
        await this.loginPassword.fill(userPassword);
        await this.loginButton.click();
    }
}