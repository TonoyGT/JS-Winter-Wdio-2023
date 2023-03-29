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
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');

        // 2. Click on Learn about Hotels.com Rewards
        const rewardsLink = await $('=Learn about Hotels.com Rewards');
        await rewardsLink.scrollIntoView(false);
        await rewardsLink.click();

        // 3. -> Verify Hotels Rewards opened in a new window
        const allHandles = await browser.getWindowHandles();
        expect(allHandles.length, 'Rewards link opened a new tab').to.equal(2);

        // 4. Click on Join Now
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes('hotel-rewards-pillar')) {
                break;
            }
        }
        const ab = await browser.getUrl();
        await $('//a[text()="Join Now"]').click();

        // 5. -> Verify Form is blank
        const emailInput = await $('#signupFormEmailInput').getAttribute('value');
        expect(emailInput, 'Email address input is blank').to.equal('');
        
        const fNameInput = await $('#signupFormFirstNameInput').getAttribute('value');
        expect(fNameInput, 'First Name input is blank').to.equal('');

        const lNameInput = await $('#signupFormLastNameInput').getAttribute('value');
        expect(lNameInput, 'Last Name input is blank').to.equal('');

        const passwordInput = await $('#signupFormPasswordInput').getAttribute('value');
        expect(passwordInput, 'Password input is blank').to.equal('');

        // 6. -> Verify Continue button is NOT enabled
        const isContinueBtnEnabled = await $('#signupFormSubmitButton').isEnabled();
        expect(isContinueBtnEnabled, 'Continue button is NOT disabled').to.be.false;

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
            await $('(//button[@data-stid="date-picker-paging"])[1]').click();
        }

        // 4. -> Verify all past dates are disabled
        const allDisabledDatesElements = await $$('//button[contains(@aria-label, "date disabled")]');
        let isAllExpDatesDisabled = true;
        for (const dateElement of allDisabledDatesElements) {
            const isDateDisabled = await dateElement.isEnabled();
            if (isDateDisabled) {
                isAllExpDatesDisabled = false;
                break;
            }
        }
        expect(isAllExpDatesDisabled, 'Past date element is not disabled').to.be.true;
    });
    


})