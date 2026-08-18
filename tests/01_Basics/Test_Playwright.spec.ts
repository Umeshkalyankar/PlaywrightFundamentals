import {test, expect} from '@playwright/test';

test("Login test", async({page}) => {
    // page is automatically created by playwright - it is called fixture
    // playwright already launched a browser, created a context, and opened this page

    await page.goto("https://app.vwo.com/login");
    await page.fill("#username", "admin");
    await page.fill("#password", "pass123");
    await page.click("#login-btn");

    await expect(page).toHaveURL("/dashboard");
});