const HomePage = require('../../src/po/googleCloudHomePage');
const SearchPage = require('../../src/po/googleCloudSearchPage');
const CalculatorWelcomePage = require('../../src/po/googleCloudCalculatorWelcomePage');
const ComputeEnginePage = require('../../src/po/googleCloudComputeEnginePage');

describe('Google Cloud Test', () => {
    it('Should create an instance with estimated cost $993.91', async () => {
        await HomePage.open();
        await HomePage.searchForCalculator();

        await SearchPage.calculatorLink.click();

        await CalculatorWelcomePage.addToEstimate();

        await ComputeEnginePage.config();

        setTimeout(() => {
          const successMessage =  $('#ow4 > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.xJ0wqe > div.egBpsb > span.MyvX5d.D0aEmf');
          successMessage.waitForDisplayed();
          const text =  successMessage.getText(); 
          expect(text).toContain('$993.91'); 
        }, 1000)
    });
});