/**
 * Created by bart on 25/05/15.
 */
var React = require('react');

var RoomListItem = require('./RoomListItem.react');

var RoomStore = require('../stores/RoomStore');


function getStateFromStores() {
  return {
      rooms: RoomStore.getAll(),
      currentRoomID: RoomStore.getCurrentID()
  };
}

var RoomSelector = React.createClass({
    // Store interaction
    getInitialState: function() {
        return getStateFromStores();
    },
    componentDidMount: function() {
        RoomStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        RoomStore.removeChangeListener(this._onChange);
    },

    // render
    render: function () {

        var roomListItems = this.state.rooms.map(function(room) {
            return (
                <RoomListItem
                    key={room.id}
                    room={room}
                    selected={room.id == this.state.currentRoomID}
                />
            );
        }, this);

        return (
            <div className="room-list">
                <h1>Selected {this.state.currentRoomID}</h1>
                {roomListItems}
            </div>
        );
    },

    // privates
    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    }
});

module.exports = RoomSelector;