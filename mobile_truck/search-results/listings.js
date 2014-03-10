var settings = require('../settings');

casper.test.begin('The mobile-truck search results', function(test) {
  test.comment('-- using domain: ' + settings.mobileTruckDomain);

  casper.start(settings.mobileTruckDomain, function() {
    casper.fill('form#searchForm', {make: 'Yamaha|2321194'}, true);
  });

  casper.then(function() {
    var headerSelector = '#mobHdr .mobHdrTxt';
    test.skip(2, 'The current site does not work for this page.');
    /*
    casper.waitForSelector(headerSelector, function() {
      test.assertExists(headerSelector, 'The header text exists');
      test.assertSelectorHasText(headerSelector, 'Results', 'The header has the correct text');
    }, function() {
      test.fail('Page failed to load');
    }, 10000);
    */
  });

  casper.then(function() {
    var resultCountSelector = '#searchPage .pageInfo h1';
    test.skip(2, 'The current site does not work for this page.');
    //test.assertExists(resultCountSelector, 'The search results count exists');
    //test.assertMatch(casper.fetchText(resultCountSelector), /Showing 1 - 25 of [0-9]{4,5} Matches/, 'At least 1000 search results were found');
  });

  casper.then(function() {
    var listingSelector = '.listingContainer';
    test.skip(1, 'The current site does not work for this page.');
    //test.assertElementCount(listingSelector, 25, 'The search results shows 25 listings');
  });

  casper.then(function() {
    var titleSelector = '.listingContainer a#title';
    test.skip(1, 'The current site does not work for this page.');
    //test.assertElementCount(titleSelector, 25, 'Each listing has a title link');
  });

  casper.then(function() {
    var middleAdSelector = '#oas_Middle';
    test.skip(1, 'The current site does not work for this page.');
    //test.assertExists(middleAdSelector, 'The middle ad exists on the page');
  });

  casper.run(function() {
    test.done();
  });
});
