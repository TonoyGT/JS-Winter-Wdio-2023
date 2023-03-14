// Due date: Mar-13 (eod)

// TC-1: Verify current temp is less than or equals to feel-like temp
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 45 and 55
 */

// TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */

// TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */

const { expect } = require("chai");
const { describe, it } = require("mocha");

describe('Homework-1', async () => {

    it('Verify current temp is between 45 and 55', async () => {

        await browser.url('https://www.accuweather.com/');

       await browser.pause(2000);

        const currentTempLocator = '//span[@class="recent-location-temp"]';
        const currentTempElement = await $(currentTempLocator);
        let currentTemp = await currentTempElement.getText();
        currentTemp = Number(currentTemp);
        await browser.pause(5000);
        expect(currentTemp > 45 && currentTemp < 55, 'Current temp is NOT in between 45 and 55').to.be.true;


    });

    it('Verify error on empty login flow', async () => {

        await browser.url('https://www.facebook.com/');

        await browser.pause(5000);

        const lofinClick = await $('//button[@name="login"]');
        await lofinClick.click();

        const errorDisp = await $('//div[text() = "The email or mobile number you entered isn’t connected to an account. "]');
        const isErrorDisp = await errorDisp.isDisplayed();
        expect(isErrorDisp, 'Error not displed').to.be.true;

        


    })

    it.only('Verify error on empty login flow', async () => {

        await browser.url('https://www.facebook.com/');

        await browser.pause(5000);

        const loginButtonLocator = await $('=Messenger');
        await loginButtonLocator.click();

        const keepMeLocator = await $('label*=Keep me');
        const isKeepMeSelected = await keepMeLocator.isSelected();
        expect(isKeepMeSelected, 'It is Selected').to.be.false;

        const loginButtonLocator1 = await $('#loginbutton');
        await loginButtonLocator1.click();
        await browser.pause(10000);

        const linkDispLocator = await $('=Find your account and log in.');
        const isLinkDisp = await linkDispLocator.isDisplayed();
        expect(isLinkDisp, 'Link Text not displed').to.be.true;
        await browser.pause(1000);

        const continueEnableLocator = await $('button[type=submit]');
        const isContinueEnabled = await continueEnableLocator.isEnabled();
        expect(isContinueEnabled, 'Not Enabled').to.be.true;
        await browser.pause(5000);

        const keepMeLocator1 = await $('input[type=checkbox]');
        const isKeepMeSelected1 = await keepMeLocator1.isSelected();
        expect(isKeepMeSelected1, 'It is Selected').to.be.false;

        await browser.pause(3000);

        const keepMeLocator11 = await $('label*=Keep me ');
        await keepMeLocator11.click();

        await browser.pause(3000);

        const keepMeLocator12 = await $('input[type=checkbox]');
        const isKeepMeSelected12 = await keepMeLocator12.isSelected();
        expect(isKeepMeSelected12, 'It is Not Selected').to.be.true;

        



        


    })



    
})
