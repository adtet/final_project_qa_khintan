const locatorHome = require("../../locators/home");
const locatorProduct = require("../../locators/product");

class Product {
  async openProduct() {
    cy.xpath(locatorHome.navbar.product).click();
  }

  async openTambahProduct() {
    cy.xpath(locatorProduct.button.tambah).click();
  }
}

module.exports = new Product();
