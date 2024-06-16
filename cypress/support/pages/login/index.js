const locator = require("../../locators/login")
const data = require("../../data-test/login")


class LoginPage {
  async visitLoginPageUrl() {
    cy.visit("https://kasiraja.ajikamaludin.id");
  }

  async verifyLoginPageAppears() {
    cy.xpath(locator.datatestid.email_input).should("exist");
    cy.xpath(locator.datatestid.password_input).should("exist");
    cy.xpath(locator.datatestid.login_button).should("exist");
  }

  async inputEmail() {
    cy.xpath(locator.datatestid.email_input).type(data.user_email);
  }

  async inputPassword() {
    cy.xpath(locator.datatestid.password_input).type(data.user_password);
  }

  async clickLoginButton() {
    cy.xpath(locator.datatestid.login_button).click();
  }
}

module.exports = new LoginPage();
