import { Locator, Page } from "@playwright/test";

export class OrderPage  {
    public page: Page;
    orderBtn: Locator;
    orderName: Locator;
    orderCountry: Locator;
    orderCity: Locator;
    orderCardNumber: Locator;
    orderMonth: Locator;
    orderYear: Locator;
    purchaseBtn: Locator;
    deleteProduct: Locator;
    priceTotal: Locator;
    successHeading: Locator;

    constructor(page: Page) {
        this.orderBtn = page.getByRole("button", { name: "Place Order" });
        this.orderName = page.getByLabel("Total:");
        this.orderCountry = page.getByLabel("Country:");
        this.orderCity = page.getByLabel("City:");
        this.orderCardNumber = page.getByLabel("Credit card:");
        this.orderMonth = page.getByLabel("Month:");
        this.orderYear = page.getByLabel("Year:");
        this.purchaseBtn = page.getByRole("button", { name: "Purchase" });
        this.deleteProduct = page.getByRole("link", { name: "Delete" });
        this.priceTotal = page.locator("#totalm");
        this.successHeading = page.getByRole("heading", {
            name: "Thank you for your purchase!",
        });
    }


    async placeOrder(
        orderName: string,
        orderCountry: string,
        orderCity: string,
        cardNumber: string,
        orderMonth: string,
        orderYear: string
    ) {
        await this.orderBtn.click();
        await this.orderName.fill(orderName);
        await this.orderCountry.fill(orderCountry);
        await this.orderCity.fill(orderCity);
        await this.orderCardNumber.fill(cardNumber);
        await this.orderMonth.fill(orderMonth);
        await this.orderYear.fill(orderYear);
        await this.purchaseBtn.click();
    }
}