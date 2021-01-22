module.exports = {
  demoTest: function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath()
    .waitForElementVisible('body')
    .click('//*[@id="main"]/nav/div/ul[4]/li[5]/button')
    .assert.cssClassPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[1]/a')
    .assert.cssClassPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]')
    .end
  }
};