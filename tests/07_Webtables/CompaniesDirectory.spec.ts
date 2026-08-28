//table[@id="companies-table"]/tbody/tr[@data-testid="row-adobe"]/td[@data-col="contact"]

//table[@id="companies-table"]/tbody/tr[@data-testid="row-adobe"]/td[@data-col="contact"]

//table[@id="companies-table"]/tbody/tr[@data-testid="row-adobe"]/td[@data-col="contact"]/following-sibling::td

import { test, expect } from "@playwright/test";

test("Handle company directory", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/tables/webtable",
  );

  //table[@id="companies-table"]/tbody/tr[@data-testid="row-adobe"]/td[@data-col="contact"]/following-sibling::td

  const firstPart = '//table[@id="companies-table"]/tbody/tr[';
  const secondPart = "]/td[";
  const thirdPart = "]";

  const rows = await page
    .locator('//table[@id="companies-table"]/tbody/tr')
    .count();
  const cols = await page
    .locator('//table[@id="companies-table"]/tbody/tr[2]/td')
    .count();

  //   console.log(rows);
  //   console.log(cols);

  for (let i = 2; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;

      const data = await page.locator(dynamicPath).innerText();
      //console.log(data);

      if (data.includes("Roland Mendel")) {
        const companyPath = `${dynamicPath}/preceding-sibling::td`;
        const companyText = await page.locator(companyPath).innerText();

        const countryPath = `${dynamicPath}/following-sibling::td`;
        const countryText = await page.locator(countryPath).innerText();

        console.log(`Roland Mendel - ${companyText}, ${countryText}`);
      }
    }
  }
});
