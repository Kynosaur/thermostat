'use strict';

var Thermostat = function() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};