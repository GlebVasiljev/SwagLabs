import BasePage from "../pageObjects/basePage";

class SwagLabsFilter extends BasePage {
    static get url() {
      return " ";
    }
    static get filerList(){
        return cy.get('[data-test="product_sort_container"]');
    }
    static get firstItemValidation(){
        return cy.get('.inventory_list > :nth-child(1)');
    }
}

export default SwagLabsFilter;