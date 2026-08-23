import {test, expect} from '@playwright/test';

test('Handle Employee Directory Table', async({page})=> {

        // Navigate to the Employee Directory web table
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

        
    //table[@aria-label='Employee Management System table']/tbody/tr[3]/td[1]
    // Create the dynamic XPath parts

    // Starting part of XPath:table → tbody → row
    const firstPart = "//table[@aria-label='Employee Management System table']/tbody/tr[";

    // After row number, we need to specify the column
    const secondPart = "]/td[";

    // Closing bracket for the column number
    const thirdPart = "]";

    // Find total number of rows
    const rows = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    // Find total number of columns
    const cols = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[1]/td").count();

    console.log(rows);
    console.log(cols);

    // Iterate through rows and columns

    for(let i=1; i<=rows; i++ ){
        for(let j=1; j<=cols; j++) {

            // Create a dynamic XPath for the current cell.
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;

            // Get the text present inside the current cell
            const data = await page.locator(dynamicPath).innerText();
            //console.log(data);

            // Search for Rohan.Mehta
            if(data.includes('Vikram.Singh')) {
                const cbox = `${dynamicPath}/parent::tr//input[@type='checkbox']`;
                await page.locator(cbox).check();
                console.log("Vikram.Singh checkbox selected");
            }
        }
    }
})