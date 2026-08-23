import {chromium} from '@playwright/test';

async function saveSession () {         // normal function created

    const browser = await chromium.launch({headless: false});   // browser

    const context = await browser.newContext(); // context

    const page = await context.newPage(); // page

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");  // url launch
    await page.waitForTimeout(2000);

    await page.fill('#user-name', 'standard_user');   // username 
    await page.fill('#password', 'tta_secret'); // password
    await page.waitForTimeout(2000);

    await page.click('#login-button'); // login button

    // next redirection page url after login
    await page.waitForURL('**/playwright/ttacart/inventory',{timeout:1500});
    await page.waitForTimeout(3000);

    // saving session storage in json using storageState()
    await context.storageState({path:"./user-session.json"});
    console.log("Session saved to user-session.json");

    await page.waitForTimeout(2000);
    await page.close();

}
saveSession();

// Q. What is session state in Playwright?
// Session state contains browser authentication information such as cookies and local storage 
// that can be saved using storageState() and reused in tests, allowing authenticated tests to run without performing login repeatedly.