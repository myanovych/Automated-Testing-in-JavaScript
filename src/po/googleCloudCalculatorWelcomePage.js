class CalculatorWelcomePage {
  get addToEstimateButton() {
    return $('#ucj-1 > div > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.gBFxQ > div > div > div > button > span.UywwFc-vQzf8d');
  }
  get estimateOption() {
    return $('#yDmH0d > div.bwApif-Sx9Kwc.bwApif-Sx9Kwc-OWXEXe-vOE8Lb.bwApif-Sx9Kwc-OWXEXe-di8rgd-bN97Pc-QFlW2.mDH3Wc.bwApif-Sx9Kwc-OWXEXe-FNFY6c > div.bwApif-wzTsW > div > div > div > div.wrzENe > div > div > div:nth-child(1) > div > div > div > h2')
  }

  async addToEstimate() {
    await this.addToEstimateButton.click();
    await this.estimateOption.waitForDisplayed();
    await this.estimateOption.click();
  }
}

module.exports = new CalculatorWelcomePage();