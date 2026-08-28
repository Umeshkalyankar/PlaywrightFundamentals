import { test, expect } from "@playwright/test";

test("Handle Table", async ({ page }) => {
  await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

  const username = await page.getByRole("textbox", { name: "Username" });
  const password = await page.getByRole("textbox", { name: "Password" });
  const login = await page.getByRole("button", { name: "Login" });

  await username.fill("admin");
  await password.fill("Awesomeqa@4321");
  await login.click();

  await expect(page).toHaveTitle("OrangeHRM");
  console.log("Login Success!");

  const terminatedEmployee = page
    .locator(".oxd-table-card")
    .filter({ hasText: "Terminated" });

  await terminatedEmployee
    .locator('xpath=//i[@class="oxd-icon bi-trash"]')
    .click();

  console.log("Terminated employee clicked!");
});
