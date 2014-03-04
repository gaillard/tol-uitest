var _ = require('underscore');
var system = require('system');

var settings = {
  recmobileCycleDomain: system.env.RECMOBILE_CYCLE_DOMAIN,
  commobileTruckDomain: system.env.COMMOBILE_TRUCK_DOMAIN
};
module.exports = _.defaults(settings, {
  recmobileCycleDomain: 'http://m.cycletrader.com',
  commobileTruckDomain: 'http://m.commercialtrucktrader.com'
});
