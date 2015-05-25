/**
 * Created by bart on 25/05/15.
 */

var ConfiguratorDispatcher = require('../dispatcher/ConfiguratorDispatcher');
var ConfiguratorConstants = require('../constants/ConfiguratorConstants');

var ActionTypes = ConfiguratorConstants.ActionTypes;

module.exports = {
    clickRoom: function(roomID) {
        ConfiguratorDispatcher.dispatch({
            type: ActionTypes.CLICK_ROOM,
            roomID: roomID
        });
    }
};