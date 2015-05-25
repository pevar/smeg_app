/**
 * Created by claudiobartolini on 24/05/15.
 */
var React = require('react');
var App = require('./components/App.react');
var AmbientActionCreator = require('./actions/AmbientActionCreator');

var SmegConfiguratorStartingData = require('../data/SmegConfiguratorStartingData');
var SmegConfiguratorWebAPIUtils = require('./utils/SmegConfiguratorWebAPIUtils');



SmegConfiguratorStartingData.init();
SmegConfiguratorWebAPIUtils.getAllNodes();
AmbientActionCreator.selectAmbient(0)

// Main
React.render(
    <App className="app" />,
    document.getElementById('app')
);