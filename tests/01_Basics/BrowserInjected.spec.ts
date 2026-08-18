import {test, expect} from '@playwright/test';

test('Browser Injected', async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://app.vwo.com");
    await context.close();
    await browser.close();
} )