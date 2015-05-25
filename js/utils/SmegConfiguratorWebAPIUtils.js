/**
 * Created by cbartolini on 19/05/15.
 */
var ConfiguratorServerActionCreators = require('../actions/ConfiguratorServerActionCreators');
var ConfiguratorConstants = require('../constants/ConfiguratorConstants');

var ActionTypes = ConfiguratorConstants.ActionTypes;

module.exports = {

    getAllNodes: function() {
        // simulate retrieving data from a database
        var rawData = JSON.parse(localStorage.getItem('data'));

        // simulate success callback
        SmegConfiguratorServerActionCreators.receiveAll(rawData.ambients);
    }

};