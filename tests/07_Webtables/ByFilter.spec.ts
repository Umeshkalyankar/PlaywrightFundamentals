import {test, expect} from '@playwright/test';

// Q - Finding one person's emailId and Country

test('Handle webtable Pagination', async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const row = await page.locator('xpath=//table[@id="employees-table"]/tbody/tr').filter({hasText: 'Ananya Iyer'});
    const email = await row.locator('xpath=//td[@data-col="email"]').innerText();
    const country = await row.locator('xpath=//td[@data-col="country"]').innerText();

    console.log(email, country);
})