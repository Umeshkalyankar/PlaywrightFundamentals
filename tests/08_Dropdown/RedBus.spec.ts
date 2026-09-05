import { test, expect } from "@playwright/test";

test("Red bus ticket booking", async ({ page }) => {
  await page.goto(
    "https://www.redbus.in/?gad_source=1&gad_campaignid=22513880550&gclid=Cj0KCQjw79nUBhCgARIsADSHka1AhYG-geKoEX3YqLVbYR3Zz1QPok_m7aI9JWPhCG7ZC8dpt6U-wgIaArtuEALw_wcB",
  );

  await page.getByLabel("From").fill("Nanded");
  await page.getByText("Nanded", { exact: true }).first().click();

  await page.getByLabel("To").first().fill("Pune");
  await page.getByText("Pune", { exact: true }).first().click();

  await page.getByRole("dialog", { name: "Select date of journey" }).click();
  await page.getByRole("button", { name: "17" }).click();

  await page.getByRole("button", { name: "Search buses" }).click();

  await expect(page).toHaveTitle(
    "Nanded to Pune Bus - Book from 63 Buses, Get Up To ₹500 Off - Sep, 2026",
  );

  await page.getByRole("button", { name: "Close App Install Banner" });

  await page.screenshot({ path: "./busresult.png" });
});
