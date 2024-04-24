class PastePage {
  get codeInput() { return $('#postform-text'); }
  get pasteExpirationDropdown() { return $('#select2-postform-expiration-container'); }
  get pasteExpirationOption() { return $(`//li[text()='${'10 Minutes'}']`); }
  get pasteNameInput() { return $('input[type="text"][id="postform-name"]'); }
  get createPasteButton() { return $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button'); }

  async open() {
      await browser.url('https://pastebin.com');
  }

  async createNewPaste(code, name) {
    await this.codeInput.setValue(code);
    await this.pasteExpirationDropdown.click();
    await this.pasteExpirationOption.waitForDisplayed();
    await this.pasteExpirationOption.click();
    await this.pasteNameInput.setValue(name);
    await this.createPasteButton.click();
  }

}

module.exports = new PastePage();
