var settings = require('../settings');

casper.test.begin('The commobile-truck browse by make list', function(test) {
  test.comment('-- using domain: ' + settings.commobileTruckDomain);

  casper.start(settings.commobileTruckDomain, function() {
    casper.clickLabel('Find by Make', 'a');
  });

  casper.then(function() {
    var headerSelector = '#mobHdr .mobHdrTxt';
    test.assertExists(headerSelector, 'The header text exists');
    test.assertSelectorHasText(headerSelector, 'BROWSE', 'The header has the correct text');
  });

  casper.then(function() {
    var makeSelector = '.makeImgHonda + .brwsCount';
    test.assertExists(makeSelector, 'The honda make exists');
    test.assertMatch(casper.fetchText(makeSelector), /Honda *\([\d,]+\)/, 'The honda make button has the correct text');
  });

  casper.run(function() {
    test.done();
  });
});
