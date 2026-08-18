import{test, expect} from '@playwright/test';

test('has title', async({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("/playwright");
});

// skip test
test.skip('skipped test', async({page})=> {
    // this test is skipped 
});

// conditional skip
test('conditional', async({page, browserName}) => {
    test.skip(browserName==='firefox', 'Not supported in firefox');
});

// only run this test
test.only('focused test', async({page}) => {
    // only this test case runs
});

// Mark as Fail
test.fail('expected to fail', async({page})=> {
    // Test is expected to fail
});

// Slow test
test('slow test', async({page})=> {
    test.slow();
    // this test will run slow has extened timeout
})

// Groups related tests
test.describe('Login Tests', () => {

    test('Valid Login', async ({ page }) => {
    });

    test('Invalid Login', async ({ page }) => {
    });

});