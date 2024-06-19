const locatorHome = require("../../locators/home");
const locatorPembelian = require("../../locators/pembelian");
const data = require("../../data-test/pembelian");

class Pembelian {
  async openPembelian() {
    cy.xpath(locatorHome.navbar.pembelian).click();
  }

  async openTambahPembelian() {
    cy.xpath(locatorPembelian.button.tambah).click();
  }

  async klikProduk() {
    cy.get(locatorPembelian.button.produk).click();

    cy.get(".chakra-modal__content").should("be.visible");

    cy.get(".chakra-input.css-2s2hk4").type(data.produk);

    cy.contains(".chakra-table tbody tr", data.produk).click();
  }

  async klikSimpan() {
    cy.get(locatorPembelian.button.simpan).click();
  }
}


module.exports = new Pembelian();