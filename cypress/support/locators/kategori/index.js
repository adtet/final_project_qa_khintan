const { deskripsi } = require("../../data-test/product");

module.exports = {
  button: {
    tambah: '//a[@href="/categories/create"]',
    simpan: ".chakra-button.css-l5lnz6",
   
  },
  input: {
    nama: '//*[@id="nama"]',
    deskripsi: '//*[@id="deskripsi"]',
  },
};
