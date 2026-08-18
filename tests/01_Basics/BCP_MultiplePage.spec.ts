import{test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test';

test("Multiple Pages", async () => {

    // Launch Browser
    const browser = await chromium.launch();

    const context = await browser.newContext();

    // page1
    const page1 = await context.newPage();
    await page1.goto("https://www.facebook.com");
    await expect(page1).toHaveTitle("Facebook");

    // page2
    const page2 = await context.newPage();
    await page2.goto("https://www.cricbuzz.com");
    
    await context.close();
    await browser.close();
})