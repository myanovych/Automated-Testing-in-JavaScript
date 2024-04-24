const PastePage = require('../../src/po/pastePage');

describe('Pastebin Test', () => {
    it('Should create a new paste with code, expiration, and name', async () => {
        await PastePage.open();
        await PastePage.createNewPaste('Hello from WebDriver', 'helloweb');

        const successMessage = await $('div.notice.-success.-post-view');
        await successMessage.waitForExist(); 
        const text = await successMessage.getText(); 
        expect(text).toContain('NOTE: Your guest paste has been posted.'); 
    });
});

