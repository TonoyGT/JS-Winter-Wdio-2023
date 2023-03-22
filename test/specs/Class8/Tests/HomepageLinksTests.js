const { expect } = require("chai");
const Homepage = require("../Pages/Homepage");


describe('Homepage Links tests', () => {

    const homepageObj = new Homepage();
    // Verify there are more than 40 links on the facebook.com
    /**
     * 1. Launch facebook.com
     * 2. Verify there are more than 40-links
     */
    it('Verify there are more than 40 links on the facebook.com', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Verify there are more than 40-links
        /**
         * find number of links on Homepage
         */
        const totalLinks = await homepageObj.getLinksCount();
        expect(totalLinks > 40, 'Number of links are NOT more than 40').to.be.true;

    })


})