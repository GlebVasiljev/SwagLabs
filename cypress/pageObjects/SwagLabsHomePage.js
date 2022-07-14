import BasePage from "../pageObjects/basePage";

class SwagLabsHomePage extends BasePage {
    static get url() {
      return "https://www.saucedemo.com/";
    }
    static get userLoginField(){
        return cy.get('[data-test="username"]');
    }
    static get userPasswordField(){
        return cy.get('[data-test="password"]');
    }
    static get errorValidation(){
        return cy.get('.error-message-container');
    }
}

export default SwagLabsHomePage;