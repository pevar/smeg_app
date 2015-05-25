/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var PreviewLayer = require("./PreviewLayer.react");
var objectAssign = require('react/lib/Object.assign');


var PreviewBox = React.createClass({

    render: function() {
        var boxStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            width: 670,
            height: 733
        };
        var layerBaseStyle = {
            position: "absolute",
            top: 0,
            left: 0
        };

        var layerNodes = this.props.ambient.layers.map(function (layer, index) {
            var layerStyle = objectAssign(layerBaseStyle, {zIndex: 100 + (100*index)});
            return (
                <PreviewLayer key={index} style={layerStyle} layer={layer}/>
            );
        });

        return (
            <div className="ambient-preview" syle={boxStyle}>
                {layerNodes}
            </div>
        );
    }
});

module.exports = PreviewBox;