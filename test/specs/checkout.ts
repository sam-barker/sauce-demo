import LoginPage from '../pageobjects/login.page';

describe('Basic checkout flow', () => {
  it('should be able to login with valid credentials', async () => {
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!',
    );
  });
});
