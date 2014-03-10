var _ = require('underscore');
var system = require('system');

var settings = {
  mobileCycleDomain: system.env.MOBILE_CYCLE_DOMAIN,
  mobileTruckDomain: system.env.MOBILE_TRUCK_DOMAIN
};
module.exports = _.defaults(settings, {
  mobileCycleDomain: 'http://m.cycletrader.com',
  mobileTruckDomain: 'http://m.commercialtrucktrader.com'
});
