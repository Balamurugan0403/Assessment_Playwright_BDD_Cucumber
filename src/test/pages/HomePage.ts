import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    private registerLink = "//a[@class='ico-register']";
    private welcomeText = "//h2[@class='topic-html-content-header']";

    async clickRegister() {
        await this.click(this.registerLink);
    }
    async isWelcomeTextVisible() {
        return this.isVisible(this.welcomeText);
    }
}