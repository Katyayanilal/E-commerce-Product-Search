import {test } from "../utils/fixture";
import { loginData } from "../testData/login.data";

test("Successful sign up", async ({ page, login, signup }) => {
  await page.goto("/");

  const userName = loginData.userName;
  const userPassword = loginData.userPassword;

  await signup.singUpAction(userName, userPassword);
});