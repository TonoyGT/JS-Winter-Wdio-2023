// Due date: Mar 15 (eod)

// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 * 
 */


// TC-2: Verify the travelers count on homepage
/**
 * 1. Launch hotels.com
 * 2. Make Adults=4 in Room-1
 * 3. Click Add another room
 * 4. Make Adults=3 in Room-2
 * 5. Click on Done button
 * 6. Verify total-travalers is equals to the number of adults mentioned in rooms
 * 
 */

const { expect } = require("chai");
const { describe, it } = require("mocha");
const moment = require("moment");

describe('Homework-2', async () => {

    // TC-1: Verify the current date is select by default in Sign Up dropdown

    it.only('Verify the current date is select by default in Sign Up dropdown', async () => {

        //1. Launch facebook.com

        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        //2. Click on Create New Account button

        const createAccLocator = await $('a[data-testid=open-registration-form-button]');
        await createAccLocator.click();
        await browser.pause(10000);

        //3. Verify current date is displayed in the birthdate dropdowns.

        //const DOBlocator = await $('span[data-type=selectors]')
        const DOBlocator = await $('//select[@title="Month"]/option[@selected="1"]')
        const DOBlocator1 = await $('//select[@title="Day"]/option[@selected="1"]')
        const DOBlocator2 = await $('//select[@title="Year"]/option[@selected="1"]')
        const A = await DOBlocator.getText()+' '+ await DOBlocator1.getText()+' '+ await DOBlocator2.getText();
        const B = moment().format('MMM D YYYY');
        console.log(A);
        console.log(B);
        expect(A, 'Not Valid').to.equal(B);
        
       

    })


    // TC-2: Verify the travelers count on homepage


    it('Verify the travelers count on homepage', async () => {

        //1. Launch hotels.com

        await browser.url('https://hotels.com/');
        await browser.pause(1000);

        const roomPickerLocator = await $('//button[@data-stid="open-room-picker"]');
        await roomPickerLocator.click();
        await browser.pause(1000);

        //2. Make Adults=4 in Room-1

        const addAdultsLocator = await $ ('//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]')
        await addAdultsLocator.click();
        await addAdultsLocator.click();
        await browser.pause(2000);

        //3. Click Add another room

        const addRoomLocator = await $ ('//button[@ id="traveler_selector_add_room"]')
        await addRoomLocator.click();
        await browser.pause(2000);

        //4. Make Adults=3 in Room-2

        const addAdults1Locator = await $ ('//input[@id="traveler_selector_adult_step_input-1"]/following-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]')
        await addAdults1Locator.click();
        await addAdults1Locator.click();
        await browser.pause(1000);

        //5. Click on Done button

        const donebuttonLocator = await $ ('//button[@id="traveler_selector_done_button"]')
        await donebuttonLocator.click();
        await browser.pause(5000);

        //6. Verify total-travalers is equals to the number of adults mentioned in rooms

        const room1AdultsValueLocator = await $('//input[@id="traveler_selector_adult_step_input-0"]')
        const room1AdultsNum = await room1AdultsValueLocator.getAttribute('value');
        
        
        const room2AdultsValueLocator = await $('//input[@id="traveler_selector_adult_step_input-1"]')
        var room2AdultsNum = await room2AdultsValueLocator.getAttribute('value');


        const totalTravelersValueLocator = await $('//input[@placeholder="Placeholder"]')
        const totalTravelersValue = await totalTravelersValueLocator.getAttribute('value');
        const totalTravelersInput = totalTravelersValue.slice(0, totalTravelersValue.indexOf(' '));
        let totalTravelersNum = parseFloat(totalTravelersInput);

       
        let roomTotal= parseFloat(room1AdultsNum) + parseFloat(room2AdultsNum);
        expect(roomTotal, 'Not Equal').to.equal(totalTravelersNum);

    })



    
})