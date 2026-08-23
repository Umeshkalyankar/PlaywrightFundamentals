import {test, expect} from '@playwright/test';

test('#TC01 - Verify student login', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.getByRole('textbox', {name:'Email Address'}).fill('abcd@gmail.com');
    await page.getByRole('textbox', {name:'Password'}).fill('Test@123');
    await page.getByRole('checkbox', {name:'Remember me', disabled:false}).check();
    await page.getByRole('button', {name:'Login to Practice Account'}).click();

    console.log("Login successful.")
})