// problem statement - Find Helen Bennett and which country she belongs to?

import { test, expect } from "@playwright/test";
test("Handling Web table", async ({ page }) => {
  await page.goto("https://awesomeqa.com/webtable.html");

  //table[@id='customers']/tbody/tr[5]/td[2]

  const firstPart = "//table[@id='customers']/tbody/tr[";
  const secondPart = "]/td[";
  const thirdPart = "]";

  const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
  const cols = await page
    .locator("//table[@id='customers']/tbody/tr[2]/td")
    .count();

  for (let i = 2; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
      //console.log(dynamicPath);

      const data = await page.locator(dynamicPath).innerText();
      //console.log(data);

      if (data.includes("Francisco Chang")) {
        const countryPath = `${dynamicPath}/following-sibling::td`;
        const countryText = await page.locator(countryPath).innerText();

        const companyPath = `${dynamicPath}/preceding-sibling::td`;
        const companyText = await page.locator(companyPath).innerText();

        console.log(`Francisco Chang is IN - ${companyText},${companyText}`);
      }
    }
  }
});
