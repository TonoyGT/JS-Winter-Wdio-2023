const { expect } = require("chai");

describe('Mouse Hover learning', () => {

    // Function:
    /**
     *  moveTo()
     */

    // Verify notifications is displayed when user move mouse on bellIcon
    /**
     * 1. Launch yahoo.com
     * 2. Move mouse to bell icon
     * 3. Verify notifications is displayed
     */
    it('Verify notifications is displayed when user move mouse on bellIcon', async () => {

        // 1. Launch yahoo.com
        await browser.url('https://www.yahoo.com/');
        await browser.pause(5000);

        // 2. Move mouse to bell icon
        /**
         * a. find the webElement to which we need to move the mouse
         * b. use function (moveTo) to perform mouse hover action
         */
        const bellIcon = await $('#ybarNotificationMenu');
        await bellIcon.moveTo();

        await browser.pause(5000);

        const notificationsHeader = await $('//span[text()="Notifications"]');
        const isNotificationsDisplayed = await notificationsHeader.isDisplayed();
        expect(isNotificationsDisplayed, 'Notifications header is NOT displayed').to.be.true;


    });


    // Verify the user lands on correct page after clicking Economy Church Chairs option
    /**
     * 1. Launch https://classroomessentialsonline.com/
     * 2. Move mouse to Church Chairs
     * 3. Click on Economy Church Chairs
     * 4. Verify "ECONOMY CHURCH CHAIRS" heading is displayed
     * 5. Verify url is "https://classroomessentialsonline.com/economy-church-chairs/"
     */
    it('Verify the user lands on correct page after clicking Economy Church Chairs option', async () => {

        // 1. Launch https://classroomessentialsonline.com/
        await browser.url('https://www.classroomessentialsonline.com/');
        await browser.pause(2000);

        // 2. Move mouse to Church Chairs
        const churchChairsHeading = await $('//a[@href="/church-chairs/"]');
        await churchChairsHeading.moveTo();

        await browser.pause(2000);

        // 3. Click on Economy Church Chairs
        // const economyChurchChairs = await $('=Economy Church Chairs');
        const economyChurchChairs = await $('//a[text()="Economy Church Chairs"]');
        await economyChurchChairs.click();

        await browser.pause(2000);

        // 4. Verify "ECONOMY CHURCH CHAIRS" heading is displayed
        const economyHeading = await $('h1=Economy Church Chairs');
        const isEconomyHeadingDisplayed = await economyHeading.isDisplayed();

        expect(isEconomyHeadingDisplayed, 'Economy Church Chairs heading is NOT displayed').to.be.true;

        // 5. Verify url is "https://classroomessentialsonline.com/economy-church-chairs/"
        const actualUrl = await browser.getUrl();
        expect(actualUrl, 'Url is NOT as expected').to.equal('https://classroomessentialsonline.com/economy-church-chairs/');



    });
});