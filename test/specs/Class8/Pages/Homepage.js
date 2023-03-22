class Homepage {

    // locators of webElements on Homepage
    createNewAccountBtnLocator = 'a[data-testid=open-registration-form-button]';
    allLinksLocator = '<a>';


    // functions to interact with webElements on Homepage

    async clickCreateNewAccountBtn() {
        await $(this.createNewAccountBtnLocator).click();
    }

    async getLinksCount() {
        const allLinks = await $$(allLinksLocator);
        return allLinks.length;
    }






}
module.exports = Homepage;
