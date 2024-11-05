import { Page, Locator } from "@playwright/test";

export class AddToCart {
    public page: Page;
    addToCartButton: Locator;
    cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.getByRole("link", { name: "Add to cart" });
        this.cartLink = page.getByRole("link", { name: "Cart", exact: true });
    }

    async addProduct() {
        await this.addToCartButton.click();
        await this.cartLink.click();
    }
}