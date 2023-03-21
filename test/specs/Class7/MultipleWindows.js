const { expect } = require("chai");

/**
 * Every browser window has an unique handle/id.
 * browser-variable gets connected with the starting browser-window during the code execution.
 * browser-variable can connect with only one window at a time.
 * 
 * Functions:
 *      getWindowHandles()
 *          returns an array with all window-handles (windows opened due to automation code)
 *      
 *      getWindowHandle()
 *          returns the window-handle with which browser is connected
 * 
 *      switchToWindow()
 *          connects the browser with new-handle
 *          input: windowHandle
 * 
 */
describe('Multiple windows', () => {
    it('Multiple windows - 1', async () => {

        // 1. Launch facebook.com
        await browser.url('/');         // baseUrl'/'   -> https://www.facebook.com/
        await browser.pause(3000);

        // 2. Click Meta Pay
        await $('=Meta Pay').click();
        await browser.pause(3000);


        // 3. Click Oculus
        await $('=Oculus').click();
        await browser.pause(3000);


        // 4. Click Instagram
        await $('=Instagram').click();
        await browser.pause(3000);


        // 5. Click Portal
        await $('=Portal').click();
        await browser.pause(3000);

        const connectedHandle = await browser.getWindowHandle();
        console.log(`connectedHandle -> ${connectedHandle}\n\n`);

        const allHandles = await browser.getWindowHandles();
        console.log(allHandles);

        // connect my browser with instagram-window
        /*
            [
                'CDwindow-365CB5D9D956350F19C6DCA7ACF69E4E',
                'CDwindow-04E0808A45EFC1ADD6AD0BDA43DCF6A6',
                'CDwindow-98D91910E5253E816C05E7EEC91E0539',
                'CDwindow-896BD4951087373A6DD16E450A68E7F2',
                'CDwindow-CC86AF53F499194159F47F6D54D73114'
            ]

            connect my browser with 'CDwindow-365CB5D9D956350F19C6DCA7ACF69E4E'
            am I on Instagram?  - checkUrl/pageTitle (pageTitle = Instagram)
            browser.getTitle()
            if (pageTitle === Instagram)
                break
            
            connect my browser with 'CDwindow-04E0808A45EFC1ADD6AD0BDA43DCF6A6'
            am I on Instagram?  - checkUrl/pageTitle (pageTitle = Instagram)
            browser.getTitle()
            if (pageTitle === Instagram)
                break

        */
        for (const handle of allHandles) {
                await browser.switchToWindow(handle);
                const title = await browser.getTitle();
                if (title.localeCompare('Instagram') === 0) {
                    break;
                }
        }

        // click 'sign up' on Instagram
        // await $('//span[text()="Sign up"]').click();
        await browser.closeWindow();
        



    });

    // Verify check avalibility page
    /**
     * 1. Launch facebook.com
     * 2. Click Meta Pay
     * 3. Click on 'Check Availability
     * 4. Verify user lands on Check Availability page
     */
    it('Verify check avalibility page', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        await browser.pause(5000);

        // 2. Click Meta Pay                -- facebook
        await $('=Meta Pay').click()

        await browser.pause(5000);

        // switch browser on Meta Pay page
        const allHandles = await browser.getWindowHandles();

        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://pay.facebook.com/') === 0) {
                break;
            }
        }

        // 3. Click on 'Check Availability --  Meta Pay 
        /*
            scroll to Check Availability
            click Check Availability
        */
       const checkAvailabilityElement = await $('=Check Availability');

       await checkAvailabilityElement.scrollIntoView(false);

       await checkAvailabilityElement.click();

       await browser.pause(5000);


        // 4. Verify user lands on Check Availability page
        const isHeaderDisplayed = await $('h1=Current availability').isDisplayed();

        expect(isHeaderDisplayed, 'Current availability title is not displayed').to.be.true;

        await browser.pause(20000);

    });


});