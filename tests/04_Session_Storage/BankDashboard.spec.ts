import{test, expect} from '@playwright/test';

test.use({
    storageState:'./admin-session.json'
});

test('Verify bank dashboard page - no logn', async({page}) =>{
    await page.goto('https://app.thetestingacademy.com/playwright/tta-bank/dashboard');

    await expect(page).toHaveTitle("TTA Bank - Dashboard");
    console.log("Title is verified.");

    await page.getByTestId('nav-logout').click();
})