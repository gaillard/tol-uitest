var settings = require('../settings');

casper.test.begin('The commobile-truck header', function(test) {
  test.comment('-- using domain: ' + settings.commobileTruckDomain);

  casper.start(settings.commobileTruckDomain, function() {
    test.assertExists('#mobHdr .logo', 'The logo exists');
    test.assertExists('#mobHdr .navicon', 'The settings cog exists');
  });

  casper.run(function() {
    test.done();
  });
});
