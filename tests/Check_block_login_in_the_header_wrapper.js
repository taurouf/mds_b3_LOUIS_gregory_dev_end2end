module.exports = {
  demoTest: function (browser) {
    browser.url('https://www.uber.com/fr/fr/')
    .waitForElementVisible('body')
    .assert.cssClassPresent("dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev de cw eo ep dm")
    .assert.cssClassPresent("dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev bt ew ex ey ep dm ez f0")
    .end
  }
};