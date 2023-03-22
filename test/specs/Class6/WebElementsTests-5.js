const { expect } = require("chai");

describe('findElements function', () => {

    // Verify there are more than 40 links on the facebook.com
    /**
     * 1. Launch facebook.com
     * 2. Verify there are more than 40-links
     */
    it('Verify there are more than 40 links on the facebook.com', async () => {

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        // 2. Verify there are more than 40-links
        /**
         * a. using single locator get ALL links
         * b. find all links webElements ($$ - [l1, l2, l3, l4, l5, .....])
         */
        const allLinks = await $$('<a>');
        expect(allLinks.length > 40, 'Number of links are NOT greater than 40').to.be.true;

    })

    // Verify number of options in Church Chairs is equals to 7
    /**
     * 1. Launch https://classroomessentialsonline.com/
     * 2. Move mouse to Church Chairs
     * 3. Verify there are 7-options in Church Chairs
     * 
     */
    it('Verify number of options in Church Chairs is equals to 7', async () => {
        // 1. Launch https://classroomessentialsonline.com/
        await browser.url('https://www.classroomessentialsonline.com/');
        await browser.pause(2000);

        // 2. Move mouse to Church Chairs
        const churchChairsHeading = await $('//a[@href="/church-chairs/"]');
        await churchChairsHeading.moveTo();

        await browser.pause(2000);

        // 3. Verify there are 7-options in Church Chairs
        const allOptions = await $$('//a[@href="/church-chairs/"]/following-sibling::div//a');
        expect(allOptions.length, 'Number of options in Church Chairs is NOT 7').to.equal(7);
    })

    // Autosuggestion: Verify user can select value from auto-suggestion
    /**
     * 1. Launch hotels.com
     * 2. Enter 'new' in the destination
     * 3. Select 'Newport Beach' from auto-suggestion.
     */
    it('Autosuggestion: Verify user can select value from auto-suggestion', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000);

        // 2. Enter 'new' in the destination
        await $('button[data-stid=destination_form_field-menu-trigger]').click();
        await $('#destination_form_field').setValue('new');

        await browser.pause(2000);

        // 3. Select 'Newport Beach' from auto-suggestion.
        /**
         * 1. present as text-value
         * 2. locator -> //div[@class="truncate"]//strong
         * 3. $$('//div[@class="truncate"]//strong'); [a1, a2, a3, a4, a5]
         * 4.   pick a1
         *      if (a1.getText() === "Newport Beach")
         *          a1.click()
         *          stop checking further
         *      pick a2
         *      if (a2.getText() === "Newport Beach")
         *          a2.click()
         *          stop checking further
         *      pick a3
         *      if (a3.getText() === "Newport Beach")
         *          a3.click()
         *          stop checking further
         * 
         * 
         */

        // const allSuggestions = await $$('//div[@class="truncate"]//strong');

        // for (const suggestion of allSuggestions) {
        //     const text = await suggestion.getText();
        //     if(text.localeCompare('Newport Beach') === 0) {
        //         await suggestion.click();
        //         break;
        //     }
        // }



        const allSuggestions = await $$('//li[contains(@class, "has-subtext")]//button');

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if(text.startsWith('Newport Beach')) {
                await suggestion.click();
                break;
            }
        }

        await browser.pause(10000);



    })


    // Autosuggestion: Verify user can select value from auto-suggestion
    /**
     * 1. Launch hotels.com
     * 2. Enter 'new' in the destination
     * 3. Select 'Newport Beach' from auto-suggestion.
     * 4. Select Apr-4 as checkin date
     * 5. Select Apr-10 as checkout date
     */

    it('Calendar: Verify user can dates from the calendar', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000);

        // 2. Enter 'new' in the destination
        await $('button[data-stid=destination_form_field-menu-trigger]').click();
        await $('#destination_form_field').setValue('new');

        await browser.pause(2000);

        const allSuggestions = await $$('//li[contains(@class, "has-subtext")]//button');

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if(text.startsWith('Newport Beach')) {
                await suggestion.click();
                break;
            }
        }

        
        await $('div[class*=uitk-date-picker-menu]').click();
        await browser.pause(2000);

        // 4. Select Apr-4 as checkin date
        const allDates = await $$('//h2[text()="April 2023"]/following-sibling::table//button');
        for (const dateElement of allDates) {
            const dateValue = await dateElement.getAttribute('data-day');
            if (dateValue.localeCompare("4") === 0) {
                await dateElement.click()
                break;
            }
        }

        await browser.pause(2000);

        // 5. Select Apr-10 as checkout date
        for (const dateElement of allDates) {
            const dateValue = await dateElement.getAttribute('data-day');
            if (dateValue.localeCompare("10") === 0) {
                await dateElement.click()
                break;
            }
        }

        await browser.pause(10000);



    })

})