import {test, expect} from '@playwright/test';

test('Playwright locators', async({page})=> {

    await page.goto("https://app.thetestingacademy.com/playwright/tta-bank/");

    // Playwright locators
    const email = await page.getByRole('textbox', { name: 'Email address' });

    const password = await page.getByTestId('login-password');

    const signinbtn = await page.getByText('Sign in securely', { exact: true });

    // Playwright commands
    await email.fill("priya.tester@ttabank.in");
    await password.fill("Test@1234");
    await signinbtn.click();

    await page.getByRole('link', { name: 'Send Money' }).first().click();
    await page.getByText('aarav.sharma@ttabank', { exact: true }).click();

    await page.getByTestId('send-amount').fill("120");

    await page.getByPlaceholder('e.g. Dinner split').fill("Food split");

    await page.getByTestId('send-submit').click();

    const confirmtext = page.getByText('Confirm transfer', { exact: true });
    await expect(confirmtext).toContainText('Confirm transfer');

    console.log("Test case verification successful.")

    await page.pause();

})