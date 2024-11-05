import { test, expect } from "../utils/fixture";
import { loginData } from "../testData/login.data";

test("Successful log in", async ({ page, login }) => {
//   await page.goto("/");

  const userName = loginData.userName;
  const userPassword = loginData.userPassword;
  const expectedWelcomeMsg = `Welcome ${userName}`;

  await login.loginAction(userName, userPassword);

  await expect(login.loginWelcomeMsg).toHaveText(expectedWelcomeMsg);
});