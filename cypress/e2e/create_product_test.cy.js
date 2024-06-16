const loginPage = require("../support/pages/login");
const productPage = require("../support/pages/product");

describe("User should be able to login", () => {
  // flaky
  it("with valid data", () => {
    loginPage.visitLoginPageUrl();
    loginPage.verifyLoginPageAppears();
    loginPage.inputEmail();
    loginPage.inputPassword();
    loginPage.clickLoginButton();

    // homePage.verifyHomePageAppears();
    productPage.openProduct();

    productPage.openTambahProduct();
    productPage.inputKode()
    productPage.inputNama()
    productPage.inputDeskripsi()
    productPage.inputHargaJual()
    productPage.inputHargaBeli()
    productPage.inputStok()
    productPage.inputKategori()
    productPage.klikSimpanButton()
    
  });
});
