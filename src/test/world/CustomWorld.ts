import { World as CucumberWorld, IWorldOptions } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

export class CustomWorld extends CucumberWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    basepage!: BasePage;
    loginpage!: LoginPage;
    registerpage!: RegisterPage;
     homepage!: HomePage;
    constructor(options: IWorldOptions) {
        super(options);
    }
}