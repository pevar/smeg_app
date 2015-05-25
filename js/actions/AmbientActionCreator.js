/**
 * Created by claudiobartolini on 24/05/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    selectAmbient: function(index) {
        AppDispatcher.handleViewAction({
            type: "SELECT_AMBIENT",
            index: index
        });
    },
};