const loginPage = require("../support/pages/login");
const pelangganPage = require("../support/pages/pelanggan");

describe("User should be able to login", () => {
  // flaky
  it("with valid data", () => {
    loginPage.visitLoginPageUrl();
    loginPage.verifyLoginPageAppears();
    loginPage.inputEmail();
    loginPage.inputPassword();
    loginPage.clickLoginButton();

    // homePage.verifyHomePageAppears();
    pelangganPage.openPelanggan();
    pelangganPage.openUbahPelanggan();
    pelangganPage.inputNama();
    pelangganPage.inputNoHP();
    pelangganPage.inputAlamat();
    pelangganPage.inputKeterangan();
    pelangganPage.klikSimpanButton();
  });
});
