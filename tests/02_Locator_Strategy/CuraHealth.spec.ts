import {test, expect } from '@playwright/test';

test('TC#01 - Verify cura health login', async({page}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let makeAppBtn = await page.locator("xpath= //a[@id='btn-make-appointment']");
    await makeAppBtn.click();

    let username = await page.locator("xpath=//input[@id='txt-username']");
    await username.fill("John Doe");

    let password = await page.locator("xpath=//input[@id='txt-password']");
    await password.fill("ThisIsNotAPassword");

    let loginbtn = await page.locator("xpath=//button[@id='btn-login']");
    await loginbtn.click();

    let verifyHeading = await page.locator("xpath=//h2[normalize-space()='Make Appointment']");
    await expect(verifyHeading).toContainText("Make Appointment");

    await expect(page).toHaveTitle("CURA Healthcare Service");
    
    let threedotmenu = await page.locator("xpath=//a[@id='menu-toggle']");
    await threedotmenu.click();

    let logoutbtn = await page.locator("xpath=//a[normalize-space()='Logout']");
    await logoutbtn.click();

});

test('TC#02 - Verify Invalid login', async ({page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

     let makeAppBtn = await page.locator("xpath= //a[@id='btn-make-appointment']");
    await makeAppBtn.click();

    let username = await page.locator("xpath=//input[@id='txt-username']");
    let password = await page.locator("xpath=//input[@id='txt-password']");
    let loginbtn = await page.locator("xpath=//button[@id='btn-login']");
    

    await username.fill("John");
    await password.fill("Test@123");
    await loginbtn.click();

    let error_message = await page.locator("xpath=//p[@class='lead text-danger']");
    await expect(error_message).toContainText('Login failed! Please ensure the username and password are valid.')
});