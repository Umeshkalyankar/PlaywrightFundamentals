import {test, expect} from '@playwright/test';

test('How to handle multiselect elements', async({page}) => {

    // navigate to page
    // find locator which gives all the element and text
    // loop through it and find the one which we want to click

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const rightSideLink:string[] = await page.locator("a.list-group-item").allInnerTexts(); // stored text of all links
    console.log(rightSideLink.length);
    console.log(rightSideLink);

    for(const linkText of rightSideLink ){
        if(linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();
        }
    }

    
})