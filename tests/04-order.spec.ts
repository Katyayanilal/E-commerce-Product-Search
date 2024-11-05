import { test, expect } from "../utils/fixture";
import { orderData } from "../testData/order.data";
import { productsData } from "../testData/products.data";

test("Select product and place an order", async ({ page, select, order, addCart }) => {
  await page.goto("/");
//   const selectPage = new SelectPage(page);
//   const addToCart = new AddToCart(page);
//   const orderPage = new OrderPage(page);

  const orderName = orderData.orderName;
  const orderCountry = orderData.orderCountry;
  const orderCity = orderData.orderCity;
  const orderCard = orderData.orderCard;
  const orderMonth = orderData.orderMonth;
  const orderYear = orderData.orderYear;
  const totalPrice = `Total: ${productsData.latop.price}`;
  const successMsg = "Thank you for your purchase!";

  await select.selectLaptop();
  await addCart.addProduct();
  // due to page lag, extra hover action to ensure that product is present in cart
  await order.deleteProduct.hover();
  await order.placeOrder(
    orderName,
    orderCountry,
    orderCity,
    orderCard,
    orderMonth,
    orderYear
  );

  await expect(order.priceTotal).toHaveText(totalPrice);
  await expect(order.successHeading).toHaveText(successMsg);
});