const locatorHome = require("../../locators/home");
const locatorPelanggan = require("../../locators/pelanggan");
const data = require("../../data-test/pelanggan");

class Pelanggan {
  async openPelanggan() {
    cy.xpath(locatorHome.navbar.pelanggan).eq(0).click();
  }

  async openTambahPelanggan() {
    cy.xpath(locatorPelanggan.button.tambah).click();
  }

  async openUbahPelanggan(){
    cy.get('button[id^="menu-button-"]').eq(1).click();
    cy.xpath(`//a[@href="/customers/${data.data_edit.id}/edit"]`).click();
  }

  async inputNama() {
    cy.xpath(locatorPelanggan.input.nama).clear();
    cy.xpath(locatorPelanggan.input.nama).type(data.nama);
  }

  async inputNoHP() {
    cy.xpath(locatorPelanggan.input.no_hp).clear();
    cy.xpath(locatorPelanggan.input.no_hp).type(data.no_hp);
  }

  async inputAlamat() {
    cy.xpath(locatorPelanggan.input.alamat).clear();
    cy.xpath(locatorPelanggan.input.alamat).type(data.alamat);
  }

  async inputKeterangan() {
    cy.xpath(locatorPelanggan.input.keterangan).clear();
    cy.xpath(locatorPelanggan.input.keterangan).type(data.keterangan);
  }

  async klikSimpanButton() {
    cy.get(locatorPelanggan.button.simpan).click();
  }
}

module.exports = new Pelanggan();
