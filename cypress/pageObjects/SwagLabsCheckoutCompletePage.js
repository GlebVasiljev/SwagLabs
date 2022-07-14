import BasePage from "./basePage";

class CheckoutComplete extends BasePage {
    
    static get thanksForOrderHeader(){
      return cy.get('[class="complete-header"]');
    }  
    static get finishButton(){
      return cy.contains('Finish');
    }
}

export default CheckoutComplete;
