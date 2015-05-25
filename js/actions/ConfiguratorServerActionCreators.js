var AppDispatcher = require('../dispatcher/AppDispatcher');
var ConfiguratorConstants = require('../constants/ConfiguratorConstants');

var ActionTypes = ConfiguratorConstants.ActionTypes;

module.exports = {

    receiveAll: function(rawData) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RAW_CONFIGURATIONS,
            rawData: rawData
        });
    }

};