/**
 * Created by bart on 25/05/15.
 */

var ConfiguratorConstants = require('../constants/ConfiguratorConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ConfiguratorDispatcher = require('../dispatcher/ConfiguratorDispatcher');

var ActionTypes = ConfiguratorConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentID = null;
var _rooms = {};

var RoomStore = assign({}, EventEmitter.prototype, {
    init: function(rawConfigurations) {
        var rawRooms = rawConfigurations.rooms;

        rawRooms.forEach(function(rawRoom, index) {
            var roomID = index;
            var room = _rooms[roomID];
            if (room) {
                return;
            }
            _rooms[roomID] = {
                id: roomID,
                title: rawRoom.title,
                image: rawRoom.image
            };
        }, this);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getAll: function() {
        var roomList = [];
        for (var id in _rooms) {
            var room = _rooms[id];
            roomList.push(room);
        }

        console.log(roomList);
        return roomList;
    },

    getCurrentID: function() {
        return _currentID;
    },

    getCurrent: function() {
        return this.get(this.getCurrentID());
    }

});

RoomStore.dispatchToken = ConfiguratorDispatcher.register(function(action) {

    switch(action.type) {
        case ActionTypes.CLICK_ROOM:
            _currentID = action.roomID;
            RoomStore.emitChange();
            break;

        case ActionTypes.RECEIVE_RAW_CONFIGURATIONS:
            RoomStore.init(action.rawConfigurations);
            RoomStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = RoomStore;