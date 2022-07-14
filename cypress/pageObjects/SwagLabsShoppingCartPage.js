import BasePage from "./basePage";

class ShoppingCartPage extends BasePage {
    
    static get ShoppingCartButton(){
      return cy.get('[id="shopping_cart_container"]');
    }  

    static get checkOutButton(){
      return cy.get('[id="checkout"]');
    }
}

export default ShoppingCartPage;