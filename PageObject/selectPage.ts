import { Locator, Page } from "@playwright/test";
import { productsData } from "../testData/products.data";

export class SelectPage  {
    public page: Page;
    phonesCategory: Locator
    phoneModel: Locator
    phoneHeadingText: Locator
    laptopCategory: Locator
    laptopModel: Locator
    laptopHeadingText: Locator
    monitorCategory: Locator
    monitorModel: Locator
    monitorHeadingText: Locator
    homePageLink: Locator
    constructor(page: Page) {
        this.page = page;
        this.phonesCategory = page.getByRole("link", { name: "Phones" });
        this.phoneModel = page.getByRole("link", { name: productsData.phone.model });
        this.phoneHeadingText = page.getByRole("heading", {
            name: productsData.phone.model,
        });

        this.laptopCategory = page.getByRole("link", { name: "Laptops" });
        this.laptopModel = page.getByRole("link", { name: productsData.latop.model });
        this.laptopHeadingText = page.getByRole("heading", {
            name: productsData.latop.model,
        });

        this.monitorCategory = page.getByRole("link", { name: "Monitors" });
        this.monitorModel = page.getByRole("link", {
            name: productsData.monitor.model,
        });
        this.monitorHeadingText = page.getByRole("heading", {
            name: productsData.monitor.model,
        });

        this.homePageLink = page.getByRole("link", { name: "PRODUCT STORE" });
    }

    async selectPhone() {
        await this.phonesCategory.click();
        await this.phoneModel.click();
    }

    async selectLaptop() {
        await this.laptopCategory.click();
        await this.laptopModel.click();
    }

    async selectMonitor() {
        await this.monitorCategory.click();
        await this.monitorModel.click();
    }
}