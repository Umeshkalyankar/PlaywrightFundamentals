import { test, expect, Page, Locator } from "@playwright/test";

async function findNameByrow(page: Page, name: string): Promise<Locator> {
  while (true) {
    // Find the row containing the person's name on current page
    const row = page
      .locator('xpath=//table[@id="employees-table"]/tbody/tr')
      .filter({ hasText: name });

    // Person found - return row and STOP function
    if ((await row.count()) > 0) {
      return row;
    }

    // Person not found → check Next button
    const next = page.getByTestId("next-page");

    if (await next.isEnabled()) {
      await next.click();
    } else {
      // No next page → person doesn't exist
      throw new Error(`${name} was not found in any page`);
    }
  }
}

test("Handle table pagination via function", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/webtable",
  );

  const row = await findNameByrow(page, "Sofia Rossi"); // function used here

  const role = await row.locator('xpath=//td[@data-col="role"]').innerText();
  const email = await row.locator('xpath=//td[@data-col="email"]').innerText();
  const country = await row
    .locator('xpath=//td[@data-col="country"]')
    .innerText();

  console.log(role, email, country);
});
