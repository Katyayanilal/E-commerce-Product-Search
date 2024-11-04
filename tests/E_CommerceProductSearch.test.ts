import { page, expect, feature, scenario, step, test } from "../utils/fixture";

feature('S01. E-Commerce Product Search', async () => {
    scenario('T001. Verify that entering a product keyword in the search bar displays relevant products', async ({ home, search }) => {
        await home.searchFor('Phones');
        await page.waitForTimeout(8000)
        // Ensure productList is defined
        const count = await search.productList.count()
        await expect(count).toBeGreaterThan(0);
        console.log(`Total count of Products = ${count}`)
    })
})    