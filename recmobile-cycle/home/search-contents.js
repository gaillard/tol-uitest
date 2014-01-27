var settings = require('../settings');

casper.test.begin('The recmobile-cycle homepage search box', function(test) {
  test.comment('-- using domain: ' + settings.domain);

  var searchBoxSelector = '.qkSrchBox #searchForm';
  casper.start(settings.domain, function() {
    test.assertExists(searchBoxSelector, 'The search box exists');
  });

  casper.then(function() {
    var classSelector = searchBoxSelector + ' select#classSelect';
    test.assertExists(classSelector, 'The class dropdown exists');
    test.assertFieldCSS(classSelector, '356953', 'The class dropdown defaults to Motorcycle');
  });

  casper.then(function() {
    var makeSelector = searchBoxSelector + ' select#makeSelect';
    test.assertExists(makeSelector, 'The make dropdown exists');
    test.assertFieldCSS(makeSelector, '', 'The make dropdown defaults to nothing');
    test.assertSelectorHasText(makeSelector, 'HONDA', 'The make dropdown includes HONDA');
    test.assertSelectorHasText(makeSelector, 'Vespa', 'The make dropdown includes VESPA');
  });

  casper.run(function() {
    test.done();
  });
});
