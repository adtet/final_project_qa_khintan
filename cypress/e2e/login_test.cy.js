const page = require("../support/pages/login");

describe("User should be able to login", () => {
  // flaky
  it("with valid data", () => {
    page.visitLoginPageUrl();
    page.verifyLoginPageAppears();
    page.inputEmail();
    page.inputPassword();
    page.clickLoginButton();

    // homePage.verifyHomePageAppears();
  });
});
