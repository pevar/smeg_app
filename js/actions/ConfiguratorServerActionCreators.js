var ConfiguratorDispatcher = require('../dispatcher/ConfiguratorDispatcher');
var ConfiguratorConstants = require('../constants/ConfiguratorConstants');

var ActionTypes = ConfiguratorConstants.ActionTypes;

module.exports = {

    receiveAll: function(rawConfigurations) {
        ConfiguratorDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_CONFIGURATIONS,
            rawConfigurations: rawConfigurations
        });
    }

};