import {test, expect} from '@playwright/test';

// load saved session - already logged in
test.use({
    storageState:"./user-session.json"
});

test("Verify inventory - no login", async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");

    await expect(page).toHaveTitle("TTACart - Products");
    console.log("No login required - Inventory page loaded.")

    await page.waitForTimeout(2000);
})