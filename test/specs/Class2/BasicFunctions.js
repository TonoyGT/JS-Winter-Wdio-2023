const { expect } = require("chai");

describe('Basic functions of WebDriverIO', () => {

    /**
     * Basic functions:
     *  url()
     *  pause()
     *  getTitle()
     *  getUrl()
     *  getWindowHandle()
     *  back()
     *  forward()
     *  refresh()
     */

    it('To launch a webpage', async () => {
        /**
         * To launch a webpage
         * function: url()
         * input: url-address
         */
        await browser.url('https://facebook.com/');

        /**
         * To pause the execution for x-milliseconds
         * functionL pause()
         * input: the number of milliseconds you want to pause
         *      1000-milliseconds = 1-second
         * 
         */
        await browser.pause(10000);
    })

    it('To get page title', async () => {
        /**
         * To get page title
         * function: getTitle()
         * returns the title as a string
         */

        /**
         * 1. Launch facebook.com
         * 2. Get the title of the page
         * 3. Verify page title is equals to "Facebook - log in or sign up"
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Get the title of the page
        const pageTitle = await browser.getTitle();

        // 3. Verify page title is equals to "Facebook - log in or sign up"
        expect(pageTitle, 'Page title is not as expected').to.equal('Facebook - log in or sign up');

    })

    it('To get the current url', async () => {
        /**
         * To get the current url in the window
         * function: getUrl();
         * returns the current-url as a string
         */

        /**
         * Verify facebook url ends with ".com/"
         * 
         * 1. Launch facebook.com
         * 2. Get the current-url
         * 3. Verify the current-url ends with ".com/"
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Get the current-url
        const currentUrl = await browser.getUrl();

        // 3. Verify the current-url ends with ".com/"
        const result = currentUrl.endsWith('.com/');
        expect(result, 'Url does not ends with ".com/').to.be.true;

    })

    it('To get the windowHandle with which browser is connect', async () => {
        /**
         * To get the windowHandle with which browser is connect
         *  OR 
         * To get the handle which is stored in browser-variable
         * 
         * function: getWindowHandle()
         * returns the window handle as a string-value
         */

        /**
         * 1. Launch weather.com
         * 2. Get the handle of the window
         * 3. Print the handle in console
         */

        // 1. Launch weather.com
        await browser.url('https://www.weather.com/');

        await browser.pause(5000);

        // 2. Get the handle of the window
        const handle = await browser.getWindowHandle();

        // 3. Print the handle in console
        console.log(`Window handle -> ${handle}`);
        

    })

    it('Misc functions', async () => {
    
        /**
         * To go back in browser
         * function: back()
         * 
         * await browser.back();
         */
        
        
        /**
         * To go forward in browser
         * function: forward()
         * 
         * await browser.forward();
         */

        /**
         * To go refresh the browser
         * function: refresh()
         * 
         * await browser.refresh();
         */

        /**
         * 1. Launch facebook.com
         * 2. go to amazon.com
         * 3. go to weather.com
         * 4. Go back
         * 5. Go back
         * 6. Go to hotels.com
         * 7. Go back
         * 8. Go farward
         * 9. Refresh page
         * 
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        // 2. go to amazon.com
        await browser.url('https://www.amazon.com/')
        await browser.pause(2000);

        // 3. go to weather.com
        await browser.url('https://www.weather.com/')
        await browser.pause(2000);

        // 4. Go back
        await browser.back();               // should be on amazon.com
        await browser.pause(2000);

        // 5. Go back
        await browser.back();               // should be on facebook.com
        await browser.pause(2000);

        // 6. Go to hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000);

        // 7. Go back
        await browser.back();               // should be on facebook.com
        await browser.pause(2000);

        // 8. Go forward
        await browser.forward();            // should be on hotels.com
        await browser.pause(2000);

        // 9. Refresh page
        await browser.refresh();            // should be on hotels.com
        await browser.pause(2000);

    })

    it('Other ways to refresh the webpage', async () => {
        /**
         * 1. Launch abc.com
         * 2. Refresh the page WITHOUT using refresh-function
         */

        /**
         * Re-launch the url
         * 
         *  1. get the current url
         *  2. launch the current-url
         */
        // const cUrl = await browser.getUrl();
        // await browser.url(cUrl);

        /**
         * go back
         * go forward
         */
        // await browser.back();
        // await browser.forward();
    })
})