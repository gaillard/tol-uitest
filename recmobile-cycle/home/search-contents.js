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
    test.skip(1, 'The current site defaults to Snowmobile instead of Motorcycle due to a bug');
    //test.assertFieldCSS(classSelector, '356953', 'The class dropdown defaults to Motorcycle');
  });

  casper.then(function() {
    var makeSelector = searchBoxSelector + ' select#makeSelect';
    test.assertExists(makeSelector, 'The make dropdown exists');
    test.assertFieldCSS(makeSelector, '', 'The make dropdown defaults to nothing');
    // TODO: Add some tests for the contents of this dropdown once it is defaulting correctly.
  });

  casper.run(function() {
    test.done();
  });
});
