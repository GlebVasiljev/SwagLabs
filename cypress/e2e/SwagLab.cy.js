import ShoppingCartPage from "../pageObjects/SwagLabsShoppingCartPage";
import SwagLabsFilter from "../pageObjects/SwagLabsFiler";
import SwagLabsHomePage from "../pageObjects/SwagLabsHomePage"
import SwagLabsInventoryPage from "../pageObjects/SwagLabsInventoryPage";
import UserInformation from "../pageObjects/SwagLabsUserInformationPage";
import CheckoutOverview from "../pageObjects/SwagCheckoutPage";
import CheckoutComplete from "../pageObjects/SwagLabsCheckoutCompletePage";


describe('SwagLabs Testing', () => {
  it('1. Login with locked_out_user', () => {
    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('locked_out_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');
    SwagLabsHomePage.errorValidation.contains('Epic sadface: Sorry, this user has been locked out');
  });

  it('2. Login with wrong password', () => {
    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('standard{enter}');
    SwagLabsHomePage.errorValidation.contains('Epic sadface: Username and password do not match any user in this service');
  })

  it('3. Validate item amount', () => {
    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');
    SwagLabsInventoryPage.itemsOnPageAlmount.should('have.length', 6);
  });
  it('4. Sort items - Price high to low', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsFilter.filerList.select('Price (high to low)');
    SwagLabsFilter.firstItemValidation.contains('Sauce Labs Fleece Jacket');
    SwagLabsFilter.firstItemValidation.contains('$49.99');
  });

  it('5. Sort items - Price low to High', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsFilter.filerList.select('Price (low to high)');
    SwagLabsFilter.firstItemValidation.contains('Sauce Labs Onesie');
    SwagLabsFilter.firstItemValidation.contains('$7.99');
  });
  it('6. Sort items - Name (Z to A)', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsFilter.filerList.select('Name (Z to A)');
    SwagLabsFilter.firstItemValidation.contains('Test.allTheThings() T-Shirt (Red)');

  });

  it('7. Validate shopping cart badge amount', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsInventoryPage.selectItemOnPage.contains('Sauce Labs Bolt T-Shirt').click();
    SwagLabsInventoryPage.addToCartButton.contains('Add to cart').click();
    SwagLabsInventoryPage.shopongCart.should('have.text', '1');
    SwagLabsInventoryPage.backToProductsButton.click();

    SwagLabsInventoryPage.selectItemOnPage.contains('Sauce Labs Bike Light').click();
    SwagLabsInventoryPage.addToCartButton.contains('Add to cart').click();
    SwagLabsInventoryPage.shopongCart.should('have.text', '2');

  });

  it('8. Reset App State', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsInventoryPage.selectItemOnPage.contains('Sauce Labs Bolt T-Shirt').click();
    SwagLabsInventoryPage.addToCartButton.contains('Add to cart').click();
    SwagLabsInventoryPage.backToProductsButton.click();
    SwagLabsInventoryPage.shopongCart.should('have.text', '1');

    SwagLabsInventoryPage.burgerMenuButton.click();
    SwagLabsInventoryPage.resetAppButton.click();
    SwagLabsInventoryPage.shopongCart.should('not.exist');

  });

  it('9. Validate shopping cart remove button functionality', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsInventoryPage.selectItemOnPage.contains('Sauce Labs Bolt T-Shirt').click();
    SwagLabsInventoryPage.addToCartButton.contains('Add to cart').click();
    SwagLabsInventoryPage.shopongCart.should('have.text', '1');

    SwagLabsInventoryPage.removeItem.click();
    SwagLabsInventoryPage.shopongCart.should('not.exist');

  });

  it.only('10. Buy a T-shirt', () => {

    SwagLabsHomePage.visit();
    SwagLabsHomePage.userLoginField.click().type('standard_user');
    SwagLabsHomePage.userPasswordField.click().type('secret_sauce{enter}');

    SwagLabsInventoryPage.selectItemOnPage.contains('Test.allTheThings() T-Shirt (Red)').click();
    SwagLabsInventoryPage.addToCartButton.contains('Add to cart').click();
    ShoppingCartPage.ShoppingCartButton.click();
    ShoppingCartPage.checkOutButton.click();

    UserInformation.userFirstNameField.click().type('Gleb');
    UserInformation.userLastNameField.click().type('Vasiljev');
    UserInformation.userZIPCodeField.click().type('LV-3601');
    UserInformation.continueButton.click();

    CheckoutOverview.itemName.should('have.text','Test.allTheThings() T-Shirt (Red)');
    CheckoutOverview.finishButton.click();

    CheckoutComplete.thanksForOrderHeader.should('have.text','THANK YOU FOR YOUR ORDER');
    

  });

})