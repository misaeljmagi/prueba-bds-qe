const { config } = require("./wdio.shared.conf");

// ============
// Specs
// ============
config.specs = ["./tests/specs/**/browser**bds**.spec.js"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        path: "/wd/hub",
        platformName: "Android",
        browserName: "chrome",
        maxInstances: 1,
        "appium:deviceName": "Pixel_8.1",
        "appium:automationName": "UiAutomator2",
        "appium:newCommandTimeout": 240,
        // "goog:chromeOptions": {
        //     w3c: true,
        // },
    },
];

exports.config = config;
