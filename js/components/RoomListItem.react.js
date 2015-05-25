/**
 * Created by bart on 25/05/15.
 */
var React = require('react');
var assign = require('object-assign');
var RoomSelectorActionCreator = require('../actions/RoomSelectorActionCreator');


var RoomListItem = React.createClass({
    getInitialState: function() {
      return {hovered: false}
    },
    render: function() {
        var room = this.props.room;

        var styles = {
            roomItem: {
              float: 'left'
            },
            roomImage: {
                height: 200,
                opacity: (this.props.selected || this.state.hovered) ? 1 : 0.5,
                transition: "opacity .3s ease-in"
            }
        };

        return (

            <div className="roomListItem"
                style={styles['roomItem']}
                onMouseOver={this._toggleHovered}
                onMouseOut={this._toggleHovered}
                onClick={this._onClick}>


                <h2>{room.title}</h2>
                <img src={room.image} style={styles['roomImage']}/>
            </div>
        );
    },

    _toggleHovered: function(){
        this.setState({hovered: !this.state.hovered});
    },
    _onClick: function() {
        RoomSelectorActionCreator.clickRoom(this.props.room.id);
    }

});

module.exports = RoomListItem;