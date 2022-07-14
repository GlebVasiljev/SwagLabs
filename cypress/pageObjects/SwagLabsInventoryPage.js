import BasePage from "../pageObjects/basePage";

class SwagLabsInventoryPage extends BasePage {
    static get url() {
      return " ";
    }
    static get itemsOnPageAlmount(){
        return cy.get('[class="inventory_item"]');
    }
    static get selectItemOnPage(){
        return cy.get('[class="inventory_item"]');
    }
    static get addToCartButton(){
        return cy.get('[class="btn btn_primary btn_small btn_inventory"]');
    }
    static get shopongCart(){
        return cy.get('[class="shopping_cart_badge"]');
    }
    static get backToProductsButton(){
        return cy.get('[id="back-to-products"]');
    }
    static get burgerMenuButton(){
        return cy.get('[id="react-burger-menu-btn"]');
    }
    static get resetAppButton(){
        return cy.get('[id="reset_sidebar_link"]');
    }
    static get removeItem(){
        return cy.get('[id="remove-sauce-labs-bolt-t-shirt"]');
    }
}

export default SwagLabsInventoryPage;