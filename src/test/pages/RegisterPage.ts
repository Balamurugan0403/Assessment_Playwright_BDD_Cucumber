import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
    private genderMale = "//input[@id='gender-male']";
    private genderFemale = "//input[@id='gender-female']";
    private firstName = "//input[@id='FirstName']";
    private lastName = "//input[@id='LastName']";
    private email = "//input[@id='Email']";
    private password = "//input[@id='Password']";
    private confirmPassword = "//input[@id='ConfirmPassword']";
    private registerButton = "//input[@id='register-button']";
    private errorMessage = "//div[@class='validation-summary-errors']/ul/li";
    private successMessage = "//div[@class='result']";
    private continueButton = "//input[@value='Continue']";

    async selectGender(gender: string) {
        if (gender.toLowerCase() === "male") {
            await this.click(this.genderMale);
        } else {
            await this.click(this.genderFemale);
        }
    }
    async setFirstName(value: string) {
        await this.fill(this.firstName, value);
    }
    async setLastName(value: string) {
        await this.fill(this.lastName, value);
    }
    async setEmail(value: string) {
        await this.fill(this.email, value);
    }
    async setPassword(value: string) {
        await this.fill(this.password, value);
    }
    async setConfirmPassword(value: string) {
        await this.fill(this.confirmPassword, value);
    }
    async clickRegisterButton() {
        await this.click(this.registerButton);
    }
    async getErrorMessage() {
        return this.getText(this.errorMessage);
    }
    
    async getSuccessMessage() {
        return this.getText(this.successMessage);
    }
    async clickContinueButton() {
        await this.click(this.continueButton);
    }
}