/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var ReactPropTypes = React.PropTypes;
var LayerOptionActionCreator = require('../actions/LayerOptionActionCreator');

var objectAssign = require('react/lib/Object.assign');

var SelectorLayerOptionItem = React.createClass({
    props: {
        option: ReactPropTypes.Object,
        layerId: ReactPropTypes.Number
    },
    render: function () {
        var optionItemStyle = {
            float: "left",
            marginRight: 20
        };

        if (this.props.option.hasOwnProperty('selected') && this.props.option.selected == true) {
            optionItemStyle = objectAssign(optionItemStyle, {
                backgroundColor: "red"
            });
        }
        return (
            <div className="selector-layer-option-item"
                 style={optionItemStyle}
                 onClick={this._onClick}
                 id={this.props.option.id}
                 layerId={this.props.layerId}
                >
                <img src={this.props.option.icon}/>
            </div>
        );
    },

    _onClick: function(event) {
        if (typeof this.props.id != 'undefined') {
            console.log('layer id: ' + this.props.layerId);
            LayerOptionActionCreator.selectOption(this.props.layerId, this.props.id);
        }
    }
});
module.exports = SelectorLayerOptionItem;