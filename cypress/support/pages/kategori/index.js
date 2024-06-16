const locatorHome = require("../../locators/home");
const locatorKategori = require("../../locators/kategori");
const data=require("../../data-test/kategori")
class Kategori {
  async openKategori() {
    cy.xpath(locatorHome.navbar.kategori).click();
  }

  async openTambahKategori() {
    cy.xpath(locatorKategori.button.tambah).click();
  }
  async inputNama() {
    cy.xpath(locatorKategori.input.nama).type(data.nama);
  }
  async inputDeskripsi() {
    cy.xpath(locatorKategori.input.deskripsi).type(data.deskripsi);
  }
}

module.exports = new Kategori();
