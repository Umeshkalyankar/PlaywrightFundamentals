// XPath functions are especially useful when the element has dynamic text, dynamic attributes, or complex DOM relationships.

import {test, expect} from '@playwright/test';

test('Find out xpath', async({page}) => {
    await page.goto("https://app.vwo.com");

    await page.locator("xpath=//input[@id='login-username']");
    await page.locator("xpath='//input[@id='login-password']");
    await page.locator("xpath=")

})