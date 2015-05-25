/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var SelectorLayerOptionList = require('./SelectorLayerOptionList.react.js');
var ReactPropTypes = React.PropTypes;

var SelectorLayerOptionBox = React.createClass({
    props: {
        layer: ReactPropTypes.Object
    },
    render: function () {
        console.log(this.props.layer);
        var boxStyle = {
            position: "absolute",
            bottom: 0,
            left: 0
        };
        var boxTitle = {
            fontWeight: 300,
            color: "#444444",
            paddingBottom: 30
        };
        return (

            <div className="selector-layer-option-box" style={boxStyle}>
                <h2 className="selector-layer-option-title" style={boxTitle}>{this.props.layer.title}</h2>
                <SelectorLayerOptionList options={this.props.layer.options}
                                         selectedOption={this.props.layer.selectedOption}
                                         layerId={this.props.layer.id}
                    />
            </div>
        );
    }
});
module.exports = SelectorLayerOptionBox;