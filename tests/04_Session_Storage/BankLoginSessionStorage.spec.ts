import {test as setup} from '@playwright/test';

setup('Login and save session', async({page}) => {
    
    await page.goto("https://app.thetestingacademy.com/playwright/tta-bank/");

    await page.getByRole('textbox', {name:'Email address'}).fill('priya.tester@ttabank.in');
    await page.getByRole('textbox', {name:'Password'}).fill('Test@1234');
    await page.getByTestId('login-submit').click();

    await page.waitForURL("https://app.thetestingacademy.com/playwright/tta-bank/dashboard", {timeout:2000});

    await page.context().storageState({path:'./admin-session.json'});
    console.log("Session saved to admin-session.json");

    await page.close();
})