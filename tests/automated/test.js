const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');

async function example() {
  const driver = await new webdriver.Builder().forBrowser('chrome').build();
  driver.get('http://localhost:3000');
}

example();
