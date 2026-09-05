import { test, expect } from "@playwright/test";

test("Handle Keyboard events", async ({ page }) => {
  await page.goto("https://www.toptal.com/developers/keycode");

  await page.keyboard.press("A");
  await page.screenshot({ path: "A.png" });

  await page.keyboard.press("ArrowLeft");
  await page.screenshot({ path: "ArrowLeft.png" });

  await page.keyboard.press("Shift+O");
  await page.screenshot({ path: "O.png" });       
});
