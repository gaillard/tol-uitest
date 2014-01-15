var settings = require('../settings');

casper.test.begin('The recmobile-cycle homepage navigation tabs', function(test) {
  test.comment('-- using domain: ' + settings.domain);

  var navListSelector = '.qkSrchNavTabs .qkSrchNav';

  casper.start(settings.domain, function() {
    test.assertExists(navListSelector, 'The navigation tabs exist');
    test.assertElementCount(navListSelector + ' li', 2, 'There are 2 tabs');
  });

  casper.then(function() {
    var searchTabSelector = navListSelector + ' li#tab1 a';
    test.assertSelectorHasText(searchTabSelector, 'Find a Motorcycle', 'The search listings tab has the correct text');
    test.assertEquals(casper.getElementAttribute(searchTabSelector, 'href'), '/', 'The search listings tab links correctly');
  });

  casper.then(function() {
    var sellTabSelector = navListSelector + ' li#tab3 a';
    test.assertSelectorHasText(sellTabSelector, 'Sell Your Motorcycle', 'The sell tab has the correct text');
    test.assert(/\/listings\/photos\//.test(casper.getElementAttribute(sellTabSelector, 'href')), 'The sell tab links correctly');
  });

  casper.run(function() {
    test.done();
  });
});
