import BasketPage from '../pageobjects/basket.page';
import LoginPage from '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';

describe('Basic checkout flow', () => {
  it('should be able to login with valid credentials', async () => {
    const { USERNAME, PASSWORD } = process.env;
    await LoginPage.open();
    await LoginPage.login(USERNAME as string, PASSWORD as string);
    expect(browser).toHaveUrlContaining('/inventory')
  });

  it('should be able to add the cheapest items to the basket', async () => {
    await ProductsPage.sortHighToLow();
    await ProductsPage.addLastTwoInventoryItems();
  });

  it('should be able to remove the cheapest item from the basket', async () => {
    await ProductsPage.openBasket();
    await BasketPage.removeCheapestItem();
  })
});
