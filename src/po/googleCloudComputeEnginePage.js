class ComputeEnginePage {
  get addInstancesButton() {
    return $('#ow4 > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.vHartc > div.U4lDT > div:nth-child(2) > div > div > div > div > div > div.QiFlid > div.BfUoNb > div:nth-child(3) > button > div');
  }
  get addGPU() {
    return $('#ow4 > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.vHartc > div.U4lDT > div:nth-child(21) > div > div > div.AsBIyb > div > div > span > div > button > div > span.eBlXUe-hywKDc');
  }

  get chooseDiscount() {
    return $('#ow4 > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.vHartc > div.U4lDT > div:nth-child(31) > div > div > div.Iykrdb > div > div > div:nth-child(2) > label')
  }


  async config() {
    for(let i=0; i<3; i++) {
      await this.addInstancesButton.click();
    }
    await this.addGPU.click();
    await this.chooseDiscount.click();
  }
}

module.exports = new ComputeEnginePage();