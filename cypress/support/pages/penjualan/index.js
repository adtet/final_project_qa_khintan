const locatorHome = require("../../locators/home");
const locatorPenjualan = require("../../locators/penjualan");
const data = require("../../data-test/penjualan");

class Penjualan {
  async openPenjualan() {
    cy.xpath(locatorHome.navbar.penjualan).click();
  }

  async openTambahPenjualan() {
    cy.xpath(locatorPenjualan.button.tambah).eq(1).click();
  }

  async inputPelanggan() {
    cy.xpath(locatorPenjualan.input.pelanggan).click();

    cy.get(".chakra-modal__content").should("be.visible");

    cy.get(".chakra-input.css-2s2hk4").type(data.pelanggan);

    cy.contains(".chakra-table tbody tr", data.pelanggan).click();
  }

  async inputInvoice() {
    cy.xpath(locatorPenjualan.input.no_invoice).clear();
    cy.xpath(locatorPenjualan.input.no_invoice).type(data.invoice);
  }

  async inputDiskon() {
    cy.xpath(locatorPenjualan.input.diskon).clear();
    cy.xpath(locatorPenjualan.input.diskon).type(data.diskon);
  }

  async klikProduk() {
    cy.get(locatorPenjualan.button.produk).click();

    cy.get(".chakra-modal__content").should("be.visible");

    cy.get(".chakra-input.css-2s2hk4").type(data.produk);

    cy.contains(".chakra-table tbody tr", data.produk).click();
  }

  async inputAmount() {
    cy.get(locatorPenjualan.input.amount).eq(3).clear();
    cy.get(locatorPenjualan.input.amount).eq(3).type(data.jumlah_bayar);
  }

  async klikBayar() {
    cy.get(locatorPenjualan.button.simpan).click();
  }
}

module.exports = new Penjualan();
