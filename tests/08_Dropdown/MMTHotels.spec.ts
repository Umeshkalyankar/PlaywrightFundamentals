import { test, expect } from "@playwright/test";

test("Verify hotel booking", async ({ page }) => {
  await page.goto("https://www.makemytrip.com/hotels/");

  await page.locator("//span[@data-cy='closeModal']").click();

  await page.getByLabel("City, Property name or Location").click();
  page
    .getByRole("textbox", { name: "Where do you want to stay?" })
    .fill("Pune");
  await page.getByText("Pune", { exact: true }).first().click();

  //await page.getByTestId("checkin").click();
  await page.getByRole("gridcell", { name: "Thu Sep 19 2026" }).click();
  await page.getByRole("gridcell", { name: "Thu Sep 20 2026" }).click();

  await page.getByRole("button", { name: "APPLY" }).click();
});
