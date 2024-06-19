const locatorHome = require("../../locators/home");
const locatorKategori = require("../../locators/kategori");
const data = require("../../data-test/kategori");
class Kategori {
  async openKategori() {
    cy.xpath(locatorHome.navbar.kategori).click();
  }

  async openUbahKategori(){
    cy.get('button[id^="menu-button-"]').eq(1).click();
    cy.xpath(`//a[@href="/categories/${data.data_edit.id}/edit"]`).click();
  }

  async openTambahKategori() {
    cy.xpath(locatorKategori.button.tambah).click();
  }
  async inputNama() {
    cy.xpath(locatorKategori.input.nama).clear();
    cy.xpath(locatorKategori.input.nama).type(data.nama);
  }
  async inputDeskripsi() {
    cy.xpath(locatorKategori.input.deskripsi).clear();
    cy.xpath(locatorKategori.input.deskripsi).type(data.deskripsi);
  }
  async klikSimpanButton() {
    cy.get(locatorKategori.button.simpan).click();
  }
}

module.exports = new Kategori();
