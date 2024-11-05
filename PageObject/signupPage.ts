import { Locator, Page } from "@playwright/test";

export class signUp {
    public page: Page;
    signUpLink: Locator;
    signUpUsername: Locator;
    signUpPassword: Locator;
    singUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.getByRole("link", { name: "Sign up" });
        this.signUpUsername = page.getByLabel("Username:");
        this.signUpPassword = page.getByLabel("Password:");
        this.singUpButton = page.getByRole("button", { name: "Sign up" });

    }
    async singUpAction(userName: string, userPassword: string) {
        await this.signUpLink.click();
        await this.signUpUsername.fill(userName);
        await this.signUpPassword.fill(userPassword);
        await this.singUpButton.click();
    }
}