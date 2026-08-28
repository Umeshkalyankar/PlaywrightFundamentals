import {test, expect} from '@playwright/test';

test("Handle table pagination", async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    // Handle Pagination - find one person's email and country 

    let name: string = 'Giulia Bianchi';
    let row;
    
    while(true) {
            // Find the row containing the person's name on current page
            row = page.locator('xpath=//table[@id="employees-table"]/tbody/tr').filter({hasText: name});

            // Person found
            if(await row.count() > 0){
                break;
            }

            // Person not found → check Next button
            const next = page.getByTestId('next-page');

            if(await next.isEnabled())
             {
                await next.click();
            } else {

        // No next page → person doesn't exist
        throw new Error(`${name} was not found in any page`);
    }
            
    }
    const role = await row.locator('xpath=//td[@data-col="role"]').innerText();
    const email = await row.locator('xpath=//td[@data-col="email"]').innerText();
    const country = await row.locator('xpath=//td[@data-col="country"]').innerText();

    console.log(role, email, country);
    await page.waitForTimeout(2000);
})