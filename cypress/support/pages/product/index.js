const locatorHome = require("../../locators/home");
const locatorProduct = require("../../locators/product");
const data= require("../../data-test/product")

class Product {
  async openProduct() {
    cy.xpath(locatorHome.navbar.product).click();
  }

  async openTambahProduct() {
    cy.xpath(locatorProduct.button.tambah).click();
  }
  async inputKode(){
cy.xpath(locatorProduct.input.kode).type(data.kode)
  }
  async inputNama(){
    cy.xpath(locatorProduct.input.nama).type(data.nama)
  }
  async inputDeskripsi(){
    cy.xpath(locatorProduct.input.deskripsi).type(data.deskripsi)

  }
  async inputHargaBeli(){
    cy.xpath(locatorProduct.input.harga_beli).type(data.harga_beli)
  }
async inputHargaJual(){
  cy.xpath(locatorProduct.input.harga_jual).type(data.harga_jual)

}
async inputStok(){
  cy.xpath(locatorProduct.input.stok).type(data.stok)

}
async inputKategori(){
  cy.xpath(locatorProduct.input.kategori).type(data.kategori)
}
async klikSimpanButton(){
  cy.xpath(locatorProduct.button.simpan).click()
}
}

module.exports = new Product();
