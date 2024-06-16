const locatorHome = require("../../locators/home");
const locatorProduct = require("../../locators/product");
const data = require("../../data-test/product");

class Product {
  async openProduct() {
    cy.xpath(locatorHome.navbar.product).click();
  }

  async openTambahProduct() {
    cy.xpath(locatorProduct.button.tambah).click();
  }
  async inputKode() {
    cy.xpath(locatorProduct.input.kode).type(data.kode);
  }
  async inputNama() {
    cy.xpath(locatorProduct.input.nama).type(data.nama);
  }
  async inputDeskripsi() {
    cy.xpath(locatorProduct.input.deskripsi).type(data.deskripsi);
  }
  async inputHargaBeli() {
    cy.xpath(locatorProduct.input.harga_beli).type(data.harga_beli);
  }
  async inputHargaJual() {
    cy.xpath(locatorProduct.input.harga_jual).type(data.harga_jual);
  }
  async inputStok() {
    cy.xpath(locatorProduct.input.stok).type(data.stok);
  }
  async inputKategori() {
    cy.xpath(locatorProduct.input.kategori).click();

    // Assert that the modal is visible
    cy.get(".chakra-modal__content").should("be.visible");

    // Type in the search/filter input (if needed)
    cy.get(".chakra-input.css-2s2hk4").type(data.kategori);

    // Select the row from the table based on its text content
    cy.contains(".chakra-table tbody tr", data.kategori).click();

    // Assert that the input field value is set correctly
  }
  async klikSimpanButton() {
    cy.get(locatorProduct.button.simpan).click();
  }
}

module.exports = new Product();
