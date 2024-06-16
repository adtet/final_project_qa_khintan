const { deskripsi } = require("../../data-test/product");

module.exports = {
  button: {
    tambah: '//a[@href="/categories/create"]',
  },
  input:{
    nama:'//*[@id="nama"]',
    deskripsi:'//*[@id="deskripsi"]',
  }
};
