import {test, expect} from '@playwright/test';

test('Verify invalid Signup', async({page})=> {
    await page.goto("https://vwo.com/free-trial/");

    let emailInput = await page.getByRole('textbox', {name: 'email'});
    await emailInput.fill("abcd");

    await page.getByRole('checkbox').check();

    let creatAccountButton = await page.getByRole('button', {name:'Create a Free Trial Account'});
    await creatAccountButton.click();

    let error_message = await page.locator("xpath=//div[contains(@class,'invalid-reason')]").first().textContent();

    await expect(error_message).toContain("The email address you entered is incorrect.");
})