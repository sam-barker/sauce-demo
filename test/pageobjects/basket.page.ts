class BasketPage {
  get cartItems() {
    return $$('.cart_item');
  }

  get removeButton() {
    return $('button[data-test^="remove"]');
  }

  get checkoutButton() {
    return $('#checkout');
  }

  async removeCheapestItem() {
    let items = await this.cartItems;
    expect(items.length).toEqual(2);
    const itemsWithPrices = items.map(async (item) => {
      const price = await item.$('.inventory_item_price');
      const originalText = await price.getText();
      const priceAsString = originalText.replaceAll('$', '').trim();
      const priceAsFloat = parseFloat(priceAsString);
      return {
        item,
        priceAsFloat,
      };
    });
    const resolvedItems = await Promise.all(itemsWithPrices);
    const sortedItems = resolvedItems.sort((i1, i2) => {
      return i1.priceAsFloat - i2.priceAsFloat;
    });
    const removeButton = await sortedItems[0].item.$(
      'button[data-test^="remove"]',
    );
    await removeButton.click();
    // re-check our items
    items = await this.cartItems;
    expect(items.length).toEqual(1);
  }

  async checkout() {
    const checkoutButton = await this.checkoutButton;
    await checkoutButton.click();
    expect(browser).toHaveUrlContaining('/checkout-step-one');
  }
}

export default new BasketPage();
