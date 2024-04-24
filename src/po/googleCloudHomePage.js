class HomePage {
  constructor(url) {
    this.url = url;
  }

  async open() {
    await browser.url(this.url);
  }

  get searchIcon() {return $('#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div');}
  get searchBar() {return $('#i4');}
  get goToIcon() {return $('#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div > div.mb2a7b > form > div > div.qdOxv-fmcmS-yrriRe-OWXEXe-H9tDt.ZJR0Ie > label > i.google-material-icons.PETVs.PETVs-OWXEXe-UbuQg')}

  async searchForCalculator() {
    await this.searchIcon.click()
    await this.searchBar.waitForDisplayed();
    await this.searchBar.setValue('Google Cloud Platform Pricing Calculator');
    await this.goToIcon.waitForDisplayed();
    await this.goToIcon.click();
  }
}

module.exports = new HomePage('https://cloud.google.com/');