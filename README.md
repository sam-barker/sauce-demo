# Assessment

### Introduction
This repository is a solution for the assessment provided by Tray.io.

The repo includes a WebdriverIO based framework for automating the following:
* Logging in to the sauce demo platform
* Sorting products by price (high to low)
* Adding the two cheapest items to the basket
* Opening the basket and removing the cheapest item
* Going to checkout

### Technologies
* WebdriverIO
* TypeScript
* Husky
* Eslint
* Prettier
* Yarn

### Prerequisites
* Ensure you have NodeJS installed (I personally used the latest v16)
* Install `yarn` with `npm install -g yarn`
* Chrome browser is installed

### How to run
1. Create a `.env` file in the root of the repository which includes the following
```
USERNAME=<USER_GOES_HERE>
PASSWORD=<PASSWORD_GOES_HERE>
```
where `USER_GOES_HERE` is a valid username for the saucedemo platform, and `PASSWORD_GOES_HERE` is a valid password for that account.
2. Install the dependencies with `yarn install`
3. Run `yarn test` to run the test suite

### Other commands
* `yarn transpile` - transpiles the TypeScript and ensures type safety
* `yarn lint` - lints the code
* `yarn lint:fix` - lints the code and fixes any trivial issues
* `yarn prepare` - installs husky

### Final remarks and comments
The repo is set up to utilise husky for pre-commit hooks. On commit it will transpile and lint the code.

The `.env` file is loaded via the `dotenv` library in the `beforeSuite` hook.

The tests only include one test file, so there isn't muc need for parameterising the execution of this for now.

Code comments - hopefully the code is clear and concise enough to be self documenting. Sometimes comments are overused to the point where they serve no purpose.