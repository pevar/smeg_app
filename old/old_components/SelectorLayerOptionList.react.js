/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var SelectorLayerOptionItem = require('./SelectorLayerOptionItem.react.js');

var SelectorLayerOptionList = React.createClass({
    render: function () {
        var optionListStyle = {
            position: "relative",
            bottom: 15
        };
        var selectedOption = this.props.selectedOption;
        var layerId =this.props.layerId;
        var LayerOptionItems = this.props.options.map(function (option, index) {

            console.log('option: ' + option.selected);
           return (
               <SelectorLayerOptionItem option={option}
                                        id={index}
                                        key={index}
                                        layerId={layerId}
                   />
           );
        });
        return (
            <div className="selector-layer-option-list" style={optionListStyle} >
                {LayerOptionItems}
            </div>
        );
    }
});
module.exports = SelectorLayerOptionList;