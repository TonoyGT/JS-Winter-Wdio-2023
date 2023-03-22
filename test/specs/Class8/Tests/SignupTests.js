const { expect } = require('chai');
const moment = require("moment");
const Homepage = require('../Pages/Homepage');
const SignupPage = require('../Pages/SignupPage')


// contains for the testcases for Signup-feature
describe('Sign Up feature', () => {

    const homepageObj = new Homepage();
    const signuppageObj = new SignupPage();

    it('Verify the current date is select by default in Sign Up dropdown', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click on Create New Account button
        await homepageObj.clickCreateNewAccountBtn();

        // 3. Verify current date is displayed in the birthdate dropdowns.
        const selectedMonth = await signuppageObj.getSelectedMonth();
        const currentMonthAbbr = moment().format('MMM');

        expect(selectedMonth, '').to.equal(currentMonthAbbr);
        

    });

    it('Verify user gets error when does not mention gender', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click on Create New Account button
        await homepageObj.clickCreateNewAccountBtn();
        await signuppageObj.waitForSignUpForm();

        // 3. Enter "JOhn" as Firstname
        await signuppageObj.enterFirstName('JOhn');

        // 4. Enter "Kial" as Lastname
        await signuppageObj.enterLastName('Kial');

        // 5. Enter 8767564532 as phone number
        await signuppageObj.enterMobileOrEmail('8767564532');

        // 6. Enter "abcd@9012#" as New password
        await signuppageObj.enterNewPassword('abcd@9012#');

        // 7. Enter Jul 20 2018 as birthdate
        await signuppageObj.selectBirthDate('Jul 20 2001');

        // 8. Click "Sign Up" button
        await signuppageObj.clickSignUpBtn();

        // 9. Verify error (Please choose a gender. You can change who can see this later.) is displayed
        const isErrDisplayed = await signuppageObj.isGenderErrorDisplayed();
        expect(isErrDisplayed, 'Gender error is NOT displayed').to.be.true;

    });


    it('', async () => {


    });


    it('', async () => {


    });


    it('', async () => {


    });

    
    it('', async () => {


    });



})