import {test, expect} from '@playwright/test';

test('Verify Login', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.fill("#user-name", "standard_user");
    await page.fill('#password', "tta_secret");
    await page.click('#login-button');

    await expect(page).toHaveTitle("TTACart - Products");
    await page.close();
})