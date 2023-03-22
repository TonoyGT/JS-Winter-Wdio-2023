const { expect } = require("chai");

/**
 * 
 * waitForDisplayed()
 *      to wait until the webElement is displayed
 * 
 * waitForEnabled()
 *      to wait until the webElement is enabled
 * 
 * waitForExist()
 *      to wait until the webElement in the DOM
 * 
 * waitForClickable()
 *      to wait until the webElement is clickable
 * 
 *      timeout: to mention user-defined timeout
 *      timeoutMsg: to mention user-defined msg in case waitFor* is failed
 *      reverse: true (if reverse:true is present the condition will work in reverse)
 * 
 * waitUntil()
 *      to wait for any custom condition
 *      input: async function
 *          1. async function must return a boolean value      
 *      keep executing the given async function, until async function returns true
 * 
 */
describe('waitFor concept', () => {

    it('waitForDisplayed() - example', async () => {

        await browser.url('/');


        await $('#abc').waitForDisplayed( { timeout: 2000 , timeoutMsg: 'Abc button is NOT found'} );


    });

    
    it('waitForClickable() - example', async () => {
        await browser.url('/');

        await $('#email').waitForDisplayed();
        await $('#email').setValue('john@gmail.com');

        await $('#pass').setValue('abcd@1234');

        await $('<button>').click();

        await $('//a[text()="Forgot Password?"]/parent::div').waitForDisplayed( { timeoutMsg: "Login error is not displayed with 10-seconds" } );
        
        const isErrorDisplayed = await $('//a[text()="Forgot Password?"]/parent::div').isDisplayed();

        expect(isErrorDisplayed, 'Login error is not displayed').to.be.true;

    });


    it('waitForEnabled() - example', async () => {
        await browser.url('/');

        await $('<button>').waitForEnabled( { reverse: true });
        
        await $('#email').setValue('john@gmail.com');

        await $('#pass').setValue('abcd@1234');

        await $('<button>').click();

        await $('//a[text()="Forgot Password?"]/parent::div').waitForDisplayed( { timeoutMsg: "Login error is not displayed with 10-seconds" } );
        
        const isErrorDisplayed = await $('//a[text()="Forgot Password?"]/parent::div').isDisplayed();

        expect(isErrorDisplayed, 'Login error is not displayed').to.be.true;

    });


    it('waitUntil() - example', async () => {
        await browser.url('/');

        // wait until the page-title is "Facebook"
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title.localeCompare('Facebook') === 0
        });

        // code

    });


    it('waitUntil() - Autosuggestion example', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000);

        // 2. Enter 'new' in the destination
        await $('button[data-stid=destination_form_field-menu-trigger]').click();
        await $('#destination_form_field').setValue('new');

        // wait until the number of auto-suggestions are 8
        await browser.waitUntil(async () => {
            const suggestions = await $$('//li[contains(@class, "has-subtext")]//button');      // suggestion = []
            return suggestions.length === 8;

        }, { timeout: 15000, timeoutMsg: 'All autosuggestions are not displayed within 15-seconds'});

        const allSuggestions = await $$('//li[contains(@class, "has-subtext")]//button');

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if(text.startsWith('Newport Beach')) {
                await suggestion.click();
                break;
            }
        }

        await browser.pause(10000);

    });

})