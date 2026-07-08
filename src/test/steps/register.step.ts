import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";
import { readRegisterData, registerData } from "../utils/csvReader";
import { faker } from "@faker-js/faker";

const users: registerData[] = readRegisterData();

Given('the user launch the application', async function (this: CustomWorld) {
    await this.basepage.navigate();
});

When('the user navigates to the register page', async function (this: CustomWorld) {
    await this.homepage.clickRegister();
});

When('the user enters registration details', async function (this: CustomWorld) {
    const email = faker.internet.email({ firstName: users[0].firstName, lastName: users[0].lastName });
    await this.registerpage.selectGender(users[0].gender);
    await this.registerpage.setFirstName(users[0].firstName);
    await this.registerpage.setLastName(users[0].lastName);
    await this.registerpage.setEmail(email);
    await this.registerpage.setPassword(users[0].password);
    await this.registerpage.setConfirmPassword(users[0].password);
});

When('the user clicks the Register button', async function (this: CustomWorld) {
    await this.registerpage.clickRegisterButton();
});

Then('the registration should be successful', async function (this: CustomWorld) {
    const message = await this.registerpage.getSuccessMessage();
    expect(message).toContain("Your registration completed");
});

Then('the user clicks the continue button', async function (this: CustomWorld) {
    await this.registerpage.clickContinueButton();
});

Then('it navigates to the Homepage', async function (this: CustomWorld) {
    await this.basepage.verifyURL("https://demowebshop.tricentis.com/");
});