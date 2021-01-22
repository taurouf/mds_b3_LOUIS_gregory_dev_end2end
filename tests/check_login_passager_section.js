module.exports = {
  demoTest: function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath()
    .waitForElementVisible('body')
    .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button')
    .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]')
    .assert.cssClassPresent('//*[@id="mobile"]')
    .assert.cssClassPresent('//*[@id="next-button"]')
    .assert.cssClassPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a/div')
    .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a/div')
    .useCss()
    .assert.cssClassPresent('#facebookLoginForm')
    .assert.cssClassPresent('#googleLoginForm')
    .end
  }
};