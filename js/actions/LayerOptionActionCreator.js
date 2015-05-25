/**
 * Created by claudiobartolini on 24/05/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

    selectOption: function(layer, index) {

        AppDispatcher.handleServerAction({
            type: "SELECT_OPTION",
            index: index,
            layer: layer
        });
    },

};