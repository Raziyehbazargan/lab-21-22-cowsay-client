'use strict';

//require webpack assets
require('./scss/base.scss');

//npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

//app modules

//angular module
const demoApp = angular.module('demoApp', []);

//angular constructors
demoApp.controller('CowsayController', ['$log','$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('init CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moooooooo';
  cowsayCtrl.show = false;
  cowsayCtrl.stateArray  = [];
  cowsayCtrl.state = null;

  cowsayCtrl.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  };

  cowsayCtrl.copyCow = function(input) {
    $log.debug('cowsayCtrl.copyCow()');
    cowsayCtrl.stateArray.push(input);
    cowsayCtrl.state = cowsay.say({text: input});
    
    if (cowsayCtrl.show === false)
      cowsayCtrl.show = true;
  };

  cowsayCtrl.resetCow = function() {
    $log.debug('cowsayCtrl.resetCow()');
    cowsayCtrl.stateArray.length === 0 ? cowsayCtrl.show = false :cowsayCtrl.show = true;  
    cowsayCtrl.state = cowsay.say({text: cowsayCtrl.stateArray.pop()});
  };

}

