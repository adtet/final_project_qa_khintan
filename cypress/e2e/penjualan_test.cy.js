const loginPage = require("../support/pages/login");
const penjualanPage = require("../support/pages/penjualan")

describe("User should be able to login", () => {
  // flaky
  it("with valid data", () => {
    loginPage.visitLoginPageUrl();
    loginPage.verifyLoginPageAppears();
    loginPage.inputEmail();
    loginPage.inputPassword();
    loginPage.clickLoginButton();

    // homePage.verifyHomePageAppears();
    penjualanPage.openPenjualan();
    

  });
});