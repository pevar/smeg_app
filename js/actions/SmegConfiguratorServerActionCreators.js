var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

    receiveAll: function(rawAmbients) {
        AppDispatcher.handleServerAction({
            type: "RECEIVE_DATA",
            rawAmbients: rawAmbients
        });
    },
    selectAmbient: function(index) {
        AppDispatcher.handleServerAction({
            type: "SELECT_AMBIENT",
            index: index
        });
    }

};