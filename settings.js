var _ = require('underscore');
var system = require('system');

var settings = {domain: system.env.DOMAIN};
module.exports = _.defaults(settings, {domain: 'http://mobile.cycletrader.com'});
