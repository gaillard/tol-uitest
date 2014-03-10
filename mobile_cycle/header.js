var settings = require('../settings');

casper.test.begin('The mobile-cycle header', function(test) {
  test.comment('-- using domain: ' + settings.mobileCycleDomain);

  casper.start(settings.mobileCycleDomain, function() {
    test.assertExists('#mobHdr .logo', 'The logo exists');
    test.assertExists('#mobHdr .navicon', 'The settings cog exists');
  });

  casper.run(function() {
    test.done();
  });
});
