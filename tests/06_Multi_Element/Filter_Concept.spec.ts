import {test, expect } from '@playwright/test';

test ('Verify element by Filter', async({page}) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const forgotPasswordLink = await page.locator("a.list-group-item").filter( {hasText: "Forgotten Password"});

    await forgotPasswordLink.click();

})