const { expect } = require("chai");

describe('Scroll learning', () => {

    // Function:
    /**
     *  scrollIntoView()
     */

    // Verify rewards link is enabled on hotels.com
    /**
     * 1. Launch hotels.com
     * 2. Verify rewards link is enabled
     */
    it('Verify rewards link is enabled on hotels.com', async () => {

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        
        await browser.pause(2000);

        // 2. Verify rewards link is enabled
        const rewardsLink = await $('=Learn about Hotels.com Rewards');      // link-text strategy
        rewardsLink.scrollIntoView(false);

        await browser.pause(2000);

        const isLinkEnabled = await rewardsLink.isEnabled();
        expect(isLinkEnabled, 'Rewards link is NOT enabled').to.be.true;

    });
});