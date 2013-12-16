var settings = require('../settings');

casper.test.begin('The recmobile-cycle header', function(test) {
  test.comment('-- using domain: ' + settings.domain);

  casper.start(settings.domain, function() {
    test.assertExists('#mobHdr .logo', 'The logo exists');
    test.assertExists('#mobHdr .myt-cog', 'The settings cog exists');
  });

  casper.run(function() {
    test.done();
  });
});
