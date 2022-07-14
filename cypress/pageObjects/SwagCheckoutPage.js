import BasePage from "./basePage";

class CheckoutOverview extends BasePage {
    
    static get itemName(){
      return cy.get('[class="inventory_item_name"]');
    }  
    static get finishButton(){
      return cy.contains('Finish');
    }
}

export default CheckoutOverview;
