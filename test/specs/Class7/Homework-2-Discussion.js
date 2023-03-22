// Due date: Mar 15 (eod)

const moment = require("moment");

describe('Homework-2', () => {

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
    it('Verify the current date is select by default in Sign Up dropdown', async () => {
        // 1. Launch facebook.com



        // 2. Click on Create New Account button



        // 3. Verify current date is displayed in the birthdate dropdowns.
        const selectedMonthElement = await $('//select[@id="month"]//option[@selected]');

        const selectedMonth = selectedMonthElement.getAttribute('');
        const currentMonthAbbr = moment().format('MMM');

        expect(selectedMonth, '').to.equal(currentMonthAbbr);



    })


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
    it('Verify the travelers count on homepage', async () => {

        //button[@data-stid="open-room-picker"]


    })


})