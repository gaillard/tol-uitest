var settings = require('../settings');

casper.test.begin('The mobile-truck header', function(test) {
  test.comment('-- using domain: ' + settings.mobileTruckDomain);

  casper.start(settings.mobileTruckDomain, function() {
    test.assertExists('#mobHdr .logo', 'The logo exists');
    test.assertExists('#mobHdr .navicon', 'The settings cog exists');
  });

  casper.run(function() {
    test.done();
  });
});
