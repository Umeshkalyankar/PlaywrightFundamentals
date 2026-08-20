import {test, expect} from '@playwright/test';

test("Verify inavlid Sigup of Facebook", async ({page}) => {
    await page.goto("https://www.facebook.com/");

    await page.getByRole('textbox', {name: 'email'}).fill("abscegmail.com");

    await page.getByRole('textbox', {name:'pass'}).fill('abc@123');

    await page.getByRole('button', {name: 'Log in'}).click();

     


})