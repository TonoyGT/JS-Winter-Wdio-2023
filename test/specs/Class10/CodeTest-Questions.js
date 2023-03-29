const { expect } = require("chai");
const moment = require("moment");

describe('WebDriver IO Code Test', () => {

    // Question - 1: (50-points)
    /**
     * Testcase: Verify rewards form is empty and Conitnue button is disabled
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Learn about Hotels.com Rewards
     * 3. -> Verify Hotels Rewards opened in a new window
     * 4. Click on Join Now
     * 5. -> Verify Form is blank
     * 6. -> Verify Continue button is NOT enabled
     */
    it('Verify rewards form is empty and Conitnue button is disabled', async () => {

    });



    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */
    it('Verify past dates are disabled in Calendar', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        
        // 2. Click on Dates section
        await $('div[class*=uitk-date-picker-menu]').waitForDisplayed();
        await $('div[class*=uitk-date-picker-menu]').click();

        // 3. If not already, go to current month
        await $('(//div[@class="uitk-date-picker-menu-months-container"]//h2)[1]').waitForDisplayed();
        const monthYearOnWeb = await $('(//div[@class="uitk-date-picker-menu-months-container"]//h2)[1]').getText();
        const monthYear = moment().format('MMMM yyyy');
        if (monthYearOnWeb.localeCompare(monthYear) !== 0) {
            // click back button
            await $('(//button[@data-stid="date-picker-paging"])[1]').click();
        }

        // 4. -> Verify all past dates are disabled
        const allDisabledDatesElements = await $$('//button[contains(@aria-label, "date disabled")]');
        const yesterdayDate = moment().subtract(1, 'day').format('D');
        // expect(allDisabledDatesElements.length, '').to.equal(yesterdayDate);

        let isAllExpDatesDisabled = true;
        for (const dateElement of allDisabledDatesElements) {
            const isDateDisabled = await dateElement.isEnabled();
            if (isDateDisabled) {
                isAllExpDatesDisabled = false;
                break;
            }
        }

        expect(isAllExpDatesDisabled, 'Past date element is not disabled').to.be.true;

        await browser.pause(5000);

        /**
         * allDisabledDatesElements
         * [we1, we2, we3, we4, .... ]
         * 
         * index-0 WE
         * WE is disabled
         * 
         * index-1 WE
         * WE is disabled
         * 
         * 
         * ...
         * ...
         * 
         * 
         * index-last WE
         * WE is disabled
         * 
         * 
         * 
         * index-X WE           X=0,1,2,3,...lastIndex
         * WE is disabled
         * 
         */
        // for (let X=0 ; X <= allDisabledDatesElements.length-1 ; X++) {
        //     const dateElement = allDisabledDatesElements[X]
        //     const isDateDisabled = await dateElement.isEnabled();
        //     expect(isDateDisabled, 'Date element is not disabled').to.be.false;
        // }






    });
    


})