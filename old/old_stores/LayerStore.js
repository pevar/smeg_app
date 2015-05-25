/**
 * Created by cbartolini on 19/05/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _layers = {};
var _selectedLayer = 1;


var LayerStore = objectAssign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    //get: function(id) {
    //    return _layers[id];
    //},

    getAll: function() {
        return _layers;
    },

    getSelectedLayer: function () {
        return _layers[_selectedLayer];
    }

});

LayerStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        case "RECEIVE_DATA":
            _layers = action.rawLayers;
            LayerStore.emitChange();
            break;

        case "SELECT_LAYER":
            _selectedLayer = action.index;
            LayerStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = LayerStore;