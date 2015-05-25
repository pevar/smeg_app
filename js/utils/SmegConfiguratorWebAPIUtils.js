/**
 * Created by cbartolini on 19/05/15.
 */
var SmegConfiguratorServerActionCreators = require('../actions/SmegConfiguratorServerActionCreators');
var LayerOption

module.exports = {

    getAllNodes: function() {
        // simulate retrieving data from a database
        var rawData = JSON.parse(localStorage.getItem('data'));

        // simulate success callback
        SmegConfiguratorServerActionCreators.receiveAll(rawData.ambients);
    }

};