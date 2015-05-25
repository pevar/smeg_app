var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

    receiveAll: function(rawLayers) {
        AppDispatcher.handleServerAction({
            type: "RECEIVE_DATA",
            rawLayers: rawLayers
        });
    }

};