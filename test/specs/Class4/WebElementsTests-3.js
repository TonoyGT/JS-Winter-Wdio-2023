const { expect } = require("chai");
const { describe, it } = require("mocha");

describe('Simple-xpath locator strategies', () => {

    // Verify user lands on forgot your password page after clicking the link
    /**
     * 1. Launch facebook.com
     * 2. Click "Forgot password?"
     * 3. Verify user lands on forgot your password page
     */
    it('Verify user lands on forgot your password page after clicking the link', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click "Forgot password?"
        const forgotPasswordLink = await $('//a[text()="Forgot password?"]');
        await forgotPasswordLink.click();

        await browser.pause(1000);

        // 3. Verify user lands on forgot your password page
        /**
         * if "Find your account" heading is displayed means we are on Forgot your password page
         * if url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
         * if pageTitle starts with "Forgot password" means we are on Forgot your password page
         */
        // if "Find your account" heading is displayed means we are on Forgot your password page
        const pageHeading = await $('//h2[@class="uiHeaderTitle"]');
        const isHeadingDisplayed = await pageHeading.isDisplayed();
        expect(isHeadingDisplayed, 'Heading: We are not on Forgot password page').to.be.true;

        // if url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
        const currentUrl = await browser.getUrl();
        const isUrlContain = currentUrl.includes('www.facebook.com/login/identify/');
        expect(isUrlContain, 'Url: We are not on Forgot password page').to.be.true;

        // if pageTitle starts with "Forgot password" means we are on Forgot your password page
        const pageTitle = await browser.getTitle();
        const isTitleStartsWith = pageTitle.startsWith('Forgot password');
        expect(isTitleStartsWith, 'Title: We are not on Forgot password page').to.be.true;
    });


    // Verify the empty login fields
    /**
     * 1. Launch facebook.com
     * 2. Verify empty login email says "Email or phone number"
     * 3. Verify empty login password says "Password"
     * 4. Verify login button says "Log In"
     */
    it('Verify the empty login fields', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify empty login email says "Email or phone number"
        const loginEmailElement = await $('//input[contains(@data-testid, "al_em")]');
        // verify placeholder-attribute value is equals to "Email or phone number"
        const placeHolderValue = await loginEmailElement.getAttribute('placeholder');
        expect(placeHolderValue, 'Empty login email has different text than expected').to.be.equal('Email or phone number');

        // 3. Verify empty login password says "Password"
        const loginPwdElement = await $('//input[starts-with(@type, "pa")]');
        const pwdPlaceholderValue = await loginPwdElement.getAttribute('placeholder');
        expect(pwdPlaceholderValue, 'Empty login password has different text than expected').to.be.equal('Password');

        // 4. Verify login button says "Log In"
        const loginBtnElement = await $('//button[contains(text(), "og")]');
        const loginBtnText = await loginBtnElement.getText();
        expect(loginBtnText, 'Login button has different text than expected').to.be.equal("Log In");
    });

    // Verify current temp is less than or equals to feel-like temp
    /**
     * 1. Launch https://www.accuweather.com/
     * 2. Verify current-temp is less than or equals to feel-like-temp
     */
    it('Verify current temp is less than or equals to feel-like temp', async () => {
        // 1. Launch https://www.accuweather.com/
        await browser.url('https://www.accuweather.com/');

        // 2. Verify current-temp is less than or equals to feel-like-temp
        const currentTempElement = await $('//span[@class="recent-location-temp"]');
        let currentTempText = await currentTempElement.getText();                   // 43° 
        currentTempText = currentTempText.trim();                                   // 43° (string)
        let currentTemp = currentTempText.substring(0,currentTempText.length-1);    // 43 (string)
        currentTemp = Number(currentTemp);                                          // 43 (number)

        const feelsLikeTempElement = await $('//span[contains(@class, "location-real-feel")]');
        let feelsLikeTempText = await feelsLikeTempElement.getText();                   // 40°  (string)
        let feelsLikeTemp = feelsLikeTempText.substring(0,feelsLikeTempText.length-1);  // 40 (string)
        feelsLikeTemp = Number(feelsLikeTemp);                                          // 40 (number)

        expect(currentTemp <= feelsLikeTemp, 'Current temp is NOT less or equals to feels like temp').to.be.true;

    });




});