/**
 * Created by bart on 25/05/15.
 */
var React = require('react');
var RoomSelector = require('./RoomSelector.react');
var RoomStore = require('../stores/RoomStore');


var App = React.createClass({
    render: function() {

        return (
            <RoomSelector />
            );
    }
});


module.exports = App;