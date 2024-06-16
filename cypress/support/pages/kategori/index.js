const locatorHome = require("../../locators/home");
const locatorKategori = require("../../locators/kategori");

class Kategori {
  async openKategori() {
    cy.xpath(locatorHome.navbar.kategori).click();
  }

  async openTambahKategori() {
    cy.xpath(locatorKategori.button.tambah).click();
  }
}

module.exports = new Kategori();
