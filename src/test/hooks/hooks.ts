import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { getEnv } from "../utils/envReader";

setDefaultTimeout(60000);
let browser: Browser;

BeforeAll(async () => {
    getEnv();
    browser = await chromium.launch({
        headless: true
    });
});

Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.basepage = new BasePage(this.page);
    this.homepage = new HomePage(this.page);
    this.loginpage = new LoginPage(this.page);
    this.registerpage = new RegisterPage(this.page);
});

After(async function (this: CustomWorld, { result, pickle }) {
    console.log(result?.status);

    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({
            path: `test-results/screenshots/${pickle.name}.png`,
            type: "png"
        });
        await this.attach(img, "image/png");
    }
    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});