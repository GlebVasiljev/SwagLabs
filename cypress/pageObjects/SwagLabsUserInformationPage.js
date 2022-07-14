import BasePage from "./basePage";

class UserInformation extends BasePage {
    
    static get userFirstNameField(){
      return cy.get('[id="first-name"]');
    }  

    static get userLastNameField(){
      return cy.get('[id="last-name"]');
    }
    static get userZIPCodeField(){
      return cy.get('[id="postal-code"]');
    }
    static get continueButton(){
      return cy.contains('Continue');
    }
}

export default UserInformation;