import{test, expect} from '@playwright/test';

test('Press sequential type', async({page}) => {
    await page.goto("https://awesomeqa.com/practice.html");
    await page.getByRole('textbox', {name:'firstname'}).pressSequentially("Testing first name", {delay:200});

    await page.waitForTimeout(5000);
})