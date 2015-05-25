/**
 * Created by bart on 25/05/15.
 */

var ConfiguratorConstants = require('../constants/ConfiguratorConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ConfiguratorConstants.ActionTypes;
var CHANGE_EVENT = 'change';