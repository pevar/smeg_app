/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');

var PreviewLayer = React.createClass({
    _selectedOption: function () {
        console.log('dddddd'  + this.props.layer.options);
      for (var i=0; i<this.props.layer.options.length; i++) {
          console.log(this.props.layer.options.selected);
          if (this.props.layer.options.selected == true) {

              return this.props.layer.options[i].image;
          }
      }
    },
    render: function() {
        console.log('selectedOption: ' + this.props.layer.selectedOption);
        return (
            <div className="preview-layer"
               key={this.props.layer.id}
               style={this.props.style}>
              <img src={this._selectedOption()}/>
            </div>
        );
    }
});

module.exports = PreviewLayer;