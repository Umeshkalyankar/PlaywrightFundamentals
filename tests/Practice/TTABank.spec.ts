import { test, expect } from "@playwright/test";

test("Verify TTA Bank login", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/tta-bank/");

  await page
    .getByRole("textbox", { name: "email" })
    .fill("priya.tester@ttabank.in");
  await page.getByRole("textbox", { name: "password" }).fill("Test@1234");
  await page.getByTestId("login-submit").click();

  await page.screenshot({ path: "Bankdashboard.png" });

  await page.getByTestId("nav-logout").click();
  
});
