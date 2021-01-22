module.exports = {
  demoTest: function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    browser.useXpath()
    .waitForElementVisible('body')
    .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]')
    .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a/div[2]')
    .elementPresent('//*[@id="answerForm"]/div[1]/div[1]/div[1]')
    .elementPresent('//*[@id="answerForm"]/div[1]/div[2]')
    .elementPresent('//*[@id="answerForm"]/div[1]/div[3]')
    .elementPresent('//*[@id="answerForm"]/div[1]/div[4]')
    .elementPresent('//*[@id="answerForm"]/div[1]/div[5]')
    .end
  }
};