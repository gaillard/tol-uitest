var _ = require('underscore');
var system = require('system');

var settings = {recmobileCycleDomain: system.env.RECMOBILE_CYCLE_DOMAIN};
module.exports = _.defaults(settings, {recmobileCycleDomain: 'http://m.cycletrader.com'});
