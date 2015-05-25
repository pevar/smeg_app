/**
 * Created by cbartolini on 19/05/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var LayerActionCreator = require('../actions/LayerActionCreators');

var CHANGE_EVENT = 'change';

var _ambients = {};
var _selectedAmbient = 0;
var _selectedLayer = 1;
var _selectedOption = 0;


var AmbientStore = objectAssign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    get: function(id) {
        return _ambients[id];
    },
    getSelected: function() {
        return objectAssign(_ambients[_selectedAmbient], {
            selectedLayer: _selectedLayer
        });
    },
    getSelectedLayer: function () {
        console.log(_ambients[_selectedAmbient].layers);
        return objectAssign(_ambients[_selectedAmbient].layers[_selectedLayer], {
            selectedOption: _selectedOption
        });
    },
    getSelectedOption: function () {
        return _ambients[_selectedAmbient].layers[_selectedLayer].options[_selectedOption];
    },
    getAll: function() {
        return _ambients;
    }

});

AmbientStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        case "RECEIVE_DATA":
            _ambients = action.rawAmbients;
            AmbientStore.emitChange();
            break;

        case "SELECT_AMBIENT":
            _selectedAmbient = action.index;
            AmbientStore.emitChange();
            break;
        case "SELECT_OPTION":
            _selectedOption = action.index;
            var targetLayer = action.layer;

            var layers = _ambients[_selectedAmbient].layers;
            for (var i=0; i<layers.length; i++) {
                if (_ambients[_selectedAmbient].layers[i].id == targetLayer) {
                    var options = _ambients[_selectedAmbient].layers[i].options;
                    for (var j=0; j<options.length; j++) {
                        _ambients[_selectedAmbient].layers[i].options[j].selected = j == _selectedOption;
                    }
                }
            }
            AmbientStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = AmbientStore;