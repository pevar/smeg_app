/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var PreviewBox = require('./PreviewBox.react');
var SelectorLayerOptionBox = require('./SelectorLayerOptionBox.react');
var AmbientStore = require('../stores/AmbientStore');


var App = React.createClass({

    getInitialState: function() {
        return this._getStateFromStores();
    },
    componentDidMount: function() {
        AmbientStore.addChangeListener(this._onChange);
    },
    render: function() {
        var stageStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            width: 1280,
            height: 900,
            backgroundColor: "white"
        };
        var ambientStyle = {
            position: "absolute",
            top: 110,
            left: 60,
            width: 1088,
            height: 733
        };
        var ambientControlsStyle = {
            width: 375,
            right: 0,
            bottom: 0,
            height: 736,
            position: "absolute"
        };
        return (
            <div className="stage" style={stageStyle}>
                <div className="ambient" style={ambientStyle}>
                    <PreviewBox className="preview-box" ambient={this.state.ambient} />
                    <div className="ambient-part-selector">
                        <div className="floor">Floor</div>
                        <div className="wall">Wall</div>
                        <div className="accessory">Product</div>
                        <div className="product">Product</div>
                    </div>
                    <div className="ambient-controls" style={ambientControlsStyle}>
                        <div className="ambient-selector">Cambia Ambiente</div>
                        <SelectorLayerOptionBox className="ambient-part-option-selector"
                                                layer={this.state.selectedLayer}/>
                    </div>
                </div>

            </div>
        );
    },
    _getStateFromStores: function() {
        return {
            ambient: AmbientStore.getSelected(),
            selectedLayer: AmbientStore.getSelectedLayer(),
        };
    },
    _onChange: function() {
        this.setState(this._getStateFromStores());
    }
});

module.exports = App;
