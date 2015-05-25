/**
 * Created by cbartolini on 19/05/15.
 */
var ConfiguratorServerActionCreators = require('../actions/ConfiguratorServerActionCreators');


module.exports = {

    getAllNodes: function() {
        // simulate retrieving data from a database
        var rawConfigurations = JSON.parse(localStorage.getItem('configurations'));

        // simulate success callback
        ConfiguratorServerActionCreators.receiveAll(rawConfigurations);
    }

};