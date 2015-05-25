/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var App = require('./components/App.react');

var ConfiguratorStartingData = require('../data/ConfiguratorExampleData');
var ConfiguratorWebAPIUtils = require('./utils/ConfiguratorWebAPIUtils');



ConfiguratorStartingData.init();
ConfiguratorWebAPIUtils.getConfiguratorData();


// Main
React.render(
    <App className="app" />,
    document.getElementById('app')
);