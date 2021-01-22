module.exports = {
  demoTest: function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath()
    .waitForElementVisible('body')
    .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button')
    .assert.cssClassPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[1]/a/div[2]')
    .assert.cssClassPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]')
    .end
  }
};