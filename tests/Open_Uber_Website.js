module.exports = {
  demoTest: function (browser) {
    browser
    .url('https://www.uber.com/fr/fr/')
    .waitForElementVisible('body')
    .assert.elementPresent('head')
    .assert.elementPresent('title')
    .assert.not.title('')
    .end
  }
};