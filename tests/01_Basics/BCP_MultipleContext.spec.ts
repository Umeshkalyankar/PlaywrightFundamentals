// Multiple Context = One browser but 2 seperate isolated contexts, like 2 incognito modes

import {test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test';

test('Multiple context', async() => {
    // Launch Browser
    const browser = await chromium.launch({headless: false});

    // Context
    //Admin Context
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

    // Viewer Context
    const viewerContext = await browser.newContext();
    const viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();
});