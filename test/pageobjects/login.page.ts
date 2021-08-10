class LoginPage {
  get usernameInput() {
    return $('#user-name');
  }

  get passwordInput() {
    return $('#password');
  }

  get loginButton() {
    return $('#login-button');
  }

  async open() {
    await browser.url('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
