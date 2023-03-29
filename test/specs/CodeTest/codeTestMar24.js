const { expect } = require("chai");




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

    //1. Launch hotels.com
            
        await browser.url('https://www.hotels.com/');
        await browser.pause(1000);
        

    //2. Click on Learn about Hotels.com Rewards

        const rewardsLink = await $('=Learn about Hotels.com Rewards');      
        rewardsLink.scrollIntoView(false);
        await browser.pause(2000);
        rewardsLink.click();
        await browser.pause(1000);

    //3. -> Verify Hotels Rewards opened in a new window

        const allHandles = await browser.getWindowHandles();
        console.log(allHandles);
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            a = (currentUrl.localeCompare('https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html') === 0);
            }
        expect(a, 'Same').to.be.true;

    //4. Click on Join Now

            //'a[class=kes-button primary-button tt-u]'
            const joinNowLocator = await $('//a[@class="kes-button primary-button tt-u"]');
            joinNowLocator.click();
            await browser.pause(10000);

    //-> Verify Form is blank

            const emailFieldL = await $('//input[@type="email"]');
            const emailValue = await emailFieldL.getAttribute('value');
            expect(emailValue, 'NOT Empty').to.be.equal('');

            const fNameFieldL = await $('//input[@name="firstNameSignUp"]');
            const fNameValue = await fNameFieldL.getAttribute('value');
            expect(fNameValue, 'NOT Empty').to.be.equal('');

            const lNameFieldL = await $('//input[@name="lastNameSignUp"]');
            const lNameValue = await lNameFieldL.getAttribute('value');
            expect(fNameValue, 'NOT Empty').to.be.equal('');

            const passFieldL = await $('//input[@type="password"]');
            const passValue = await passFieldL.getAttribute('value');
            expect(passValue, 'NOT Empty').to.be.equal('');

    //-> Verify Continue button is NOT enabled

            const buttonL = await $('//button[@type="submit"]');
            const isButtonDisabled = await buttonL.isEnabled();
            expect(isButtonDisabled, 'Enable').to.be.false;


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
        it.only('Verify past dates are disabled in Calendar', async () => {

    //1. Launch hotels.com
            
        await browser.url('https://www.hotels.com/');
        await browser.pause(1000);

    //2. Click on Dates section

        const dateSectionL = await $('//button[@id="date_form_field-btn"]');
        dateSectionL.click();

    //3. If not already, go to current month
        
        const currentMonthSelectionL = await $('//button[@data-stid="date-picker-paging"]/preceding-sibling::button[@class="uitk-button uitk-button-medium uitk-button-only-icon uitk-layout-flex-item uitk-button-paging"]');
        currentMonthSelectionL.click();
        await browser.pause(5000);

        const allDisabledDateL = await $$('//button[contains(@aria-label, "date disabled")]');
        //const ab = allDisabledDateL.length;
        console.log('HHHHHHH',allDisabledDateL);
        //expect(ab, 'NOT Empty').to.be.equal(23);
        await browser.pause(5000);

        //const currentDateL = await $('//button[contains(@aria-label, "current check in date")]');
       // let currentDateValue = await currentDateL.getAttribute('data-day');
       // console.log('HH', currentDateValue);
        //expect(passValue, 'NOT Empty').to.be.equal('');

        /*const allLinks = await $$('<a>');
        expect(allLinks.length > 40, 'Number of links are NOT greater than 40').to.be.true;
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            a = (currentUrl.localeCompare('https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html') === 0);
            }
        expect(a, 'Same').to.be.true;*/

            
        
   
        });
        
   
    })