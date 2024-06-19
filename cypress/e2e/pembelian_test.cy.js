const loginPage = require("../support/pages/login");
const pembelianPage = require("../support/pages/pembelian");

describe("User should be able to login", () => {
  // flaky
  it("with valid data", () => {
    loginPage.visitLoginPageUrl();
    loginPage.verifyLoginPageAppears();
    loginPage.inputEmail();
    loginPage.inputPassword();
    loginPage.clickLoginButton();

    // homePage.verifyHomePageAppears();
    pembelianPage.openPembelian();
  });
});
