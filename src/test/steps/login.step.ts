import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";

When('the user navigates to the login page', async function (this: CustomWorld) {
    await this.loginpage.navigateToLoginPage();
});

When('the user enters email {string} and password {string}', async function (this: CustomWorld, email: string, password: string) {
    await this.loginpage.setEmail(email);
    await this.loginpage.setPassword(password);
});

When('the user clicks the Login button', async function (this: CustomWorld) {
    await this.loginpage.clickLoginButton();
});

Then('the user should see the {string} message', async function (this: CustomWorld, expectedResult: string) {
    if (expectedResult === "success") {
        const loggedIn = await this.loginpage.isLoggedIn();
        expect(loggedIn).toBe(true);
    }
    else {
        const actualMessage = await this.loginpage.getErrorMessage();
        expect(actualMessage).toContain("Login was unsuccessful. Please correct the errors and try again.");
    }
});