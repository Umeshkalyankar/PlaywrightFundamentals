import { test, expect } from "@playwright/test";

test("Handle custom dropdown", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/dropdowns",
  );

  // open the dropdown
  await page.getByTestId("lang-trigger").click();

  // select the option
  await page.getByRole("option", { name: "JavaScript" }).click();

  // Handle Webframework dropdowm
  await page.getByTestId("framework-trigger").click();
  await page.getByRole("option", { name: "Next.js" }).click();

  // Handle experience leval dropdown
  await page.getByTestId("experience-trigger").click();
  await page.getByRole("option", { name: "Mid-level (4-6 years)" }).click();

  await page.pause();
});
