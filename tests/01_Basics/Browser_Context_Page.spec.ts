// Browser → actual browser instance
// Context → isolated browser session
// Page → tab inside the context

import {test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test'

test("Verify google", async()=> {
// Level 1 = Launch browser
const browser = await chromium.launch();

// Level 2 = Create context - fresh session, isolated cookies
const context = await browser.newContext();

// Level 3 = Open page -a tab inside context
const page = await context.newPage();

await page.goto("https://www.google.com");

await browser.close();
});


