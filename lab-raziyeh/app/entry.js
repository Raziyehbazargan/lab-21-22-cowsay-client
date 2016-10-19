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
demoApp.controller('CowsayController', ['$log', function ($log) {
  $log.debug('init CowsayController');

  this.title = 'Moooooooo';
  this.show = false;
  this.stateArray  = [];
  this.state = null;
  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
  });

  this.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say',  f: this.currentCow});
  };

  this.copyCow = function(input) {
    $log.debug('cowsayCtrl.copyCow()');

    if(input.length) {
      this.state = this.updateCow(input);
      this.stateArray.push(this.state);
    
      if (this.show === false)
        this.show = true;
    }
  };

  this.resetCow = function() {
    $log.debug('cowsayCtrl.resetCow()');

    this.stateArray.length === 0 ? this.show = false : this.show = true;
    this.state = this.stateArray.pop();
  };
}]);

