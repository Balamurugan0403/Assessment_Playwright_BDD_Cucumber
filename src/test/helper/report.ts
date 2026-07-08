const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports",
    reportPath: "./reports/html-report",

    pageTitle: "Automation Exercise Report",
    reportName: "Automation Exercise Execution Report",

    displayDuration: true,

    metadata: {
        browser: {
            name: "Chrome",
            version: "latest"
        },

        device: "Local Machine",

        platform: {
            name: "Windows",
            version: "11"
        }
    }
});