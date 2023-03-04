describe("Test Amazon Homepage", () => {
    it("test amazon url", async () =>{
       await browser.url('https://www.amazon.com/');
        await browser.pause('5000');

    })
})