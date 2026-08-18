import {test, expect} from '@playwright/test';

test('TC#01-Verify login with invalid credentials', async ({page}) => {

    await page.goto("https://app.vwo.com/#/login");

    // Creation of element
    let username = page.locator('#login-username');
    let password = page.locator('#login-password');
    let signin = page.locator('#js-login-btn');

    // now playwright finds the element and act (auto-wait)
    await username.fill('abc@admin.com');
    await password.fill('admin@123');
    await signin.click();
    console.log("All actions completed.");

    let error_message = await page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText('Your email, password, IP address or location did not match');
})

// Use of Default locators
// id => #id
// className => .
// name => [name="value"]
// tag => [tag]