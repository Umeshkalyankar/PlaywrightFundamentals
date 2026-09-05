import { test, expect } from "@playwright/test";

test("Handle Employee Directory Table", async ({ page }) => {
  // Navigate to the Employee Directory web table
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/webtable",
  );

  const row = await page
    .locator('//table[@id="companies-table"]/tbody/tr')
    .filter({ hasText: "Helen Bennett" });

  const country = await row
    .locator('xpath=//td[@data-col="country"]')
    .innerText();

    

  console.log(country);
});
