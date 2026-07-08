import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private emailField = "//input[@id='Email']";
    private passwordField = "//input[@id='Password']";
    private loginButton = "//input[@value='Log in']";
    private errorMessage = "//div[contains(@class,'validation-summary-errors')]//span";
    private successIndicator = "//a[contains(@class,'account')]";
    async navigateToLoginPage() {
        await this.page.goto(`${process.env.BASEURL}login`, {
            waitUntil: "domcontentloaded",
            timeout: 60000
        });
    }
    async setEmail(email: string) {
        await this.fill(this.emailField, email);
    }
    async setPassword(password: string) {
        await this.fill(this.passwordField, password);
    }
    async clickLoginButton() {
        await this.click(this.loginButton);
    }
    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
    async isLoggedIn() {
        return this.isVisible(this.successIndicator);
    }
}