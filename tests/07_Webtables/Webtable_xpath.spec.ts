import {test, expect} from '@playwright/test';

test('Handle Webtable element when user is known', async({page}) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    const checkbox = await page.locator('xpath=//td[text()="Neha.Patel"]/preceding-sibling::td/input[@type="checkbox"]');
    await checkbox.click();

    console.log("Checkbox is checked for user - Neha Patel");
})