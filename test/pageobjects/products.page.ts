class ProductsPage {
    get sortButton() {
        return $('select[data-test="product_sort_container"]');
    }

    get inventoryItemButton() {
        return $$('button[data-test^="add-to-cart"]');
    }

    get basketButton() {
        return $('.shopping_cart_link');
    }

    async sortHighToLow() {
        const selectBox = await this.sortButton;
        await selectBox.selectByAttribute('value', 'hilo');
        const value = await selectBox.getValue();
        expect(value).toEqual('hilo');
    }

    async addLastTwoInventoryItems() {
        const items = await this.inventoryItemButton;
        const penultimateItem = items[items.length - 2];
        const lastItem = items[items.length - 1];
        await lastItem.scrollIntoView();;
        await penultimateItem.click();
        await lastItem.click();
    }

    async openBasket() {
        const button = await this.basketButton;
        await button.click();
        expect(browser).toHaveUrlContaining('/cart')
    }
}

export default new ProductsPage();