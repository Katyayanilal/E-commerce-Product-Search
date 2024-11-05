import { test, feature, scenario, expect, beforeTest, afterTest } from "../utils/fixture";
import { productsData } from "../testData/products.data";

feature("Select product from products category", () => {
  let productName: string;

  beforeTest(async ({ page }) => {
    await page.goto("/");
  });

  afterTest(async ({ page, select }) => {
    await select.homePageLink.click();
  });

  scenario("Select phone", async ({ page, select }) => {
    productName = productsData.phone.model;

    await select.selectPhone();

    await expect(select.phoneHeadingText).toHaveText(productName);
  });

  scenario("Select laptop", async ({ page, select }) => {
    productName = productsData.latop.model;

    await select.selectLaptop();

    await expect(select.laptopHeadingText).toHaveText(productName);
  });

  scenario("Select monitor", async ({ page, select }) => {
    productName = productsData.monitor.model;

    await select.selectMonitor();

    await expect(select.monitorHeadingText).toHaveText(productName);
  });
});