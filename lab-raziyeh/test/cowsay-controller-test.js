'use strict';

// IN EVERY FILE
// first require in the entry.js and angular-mocks
require('./lib/test-setup.js');

const cowsay = require('cowsay-browser');
const angular = require('angular');

describe('testing cowsayCtrl', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('testing initial properties', () => {
    it('title should equal /My Cowsay app/', () => {
      expect(this.cowsayCtrl.title).toBe('My Cowsay app');
    });

    it('stateArray should be empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.stateArray)).toBe(true);
    });

    it('cowfiles should be same as cowsay.list', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
        expect(this.cowsayCtrl.currentCow).toEqual(list[0]);
      });
    });
  });

  describe('testing #updateCow()', () => {
    it('should return a bevis.zen hello', () => {
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.currentCow});
      let result = this.cowsayCtrl.updateCow('hello'); 
      expect(result).toEqual(expectedResult);
    });
  });

  describe('testing #updateCow() with no input parameters', () => {
    it('should return a cowsay(text) with gimme something to say', () => {
      let expectedResult = '\n' + cowsay.say({text: 'gimme something to say', f: this.cowsayCtrl.currentCow});
      let result = this.cowsayCtrl.updateCow();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('testing #copyCow()', () => {
    it('should return a bevis.zen hello', () => {
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.currentCow});
      let copyCowResult = this.cowsayCtrl.copyCow('hello'); 
      expect(copyCowResult).toEqual(expectedResult);
      expect(this.cowsayCtrl.stateArray[0]).toEqual(expectedResult);
    });
  });

  describe('testing #resetCow()', () => {
    it('should return a bevis.zen hello', () => {
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.currentCow});
      this.cowsayCtrl.copyCow('hello'); 
      this.cowsayCtrl.copyCow('lulwat');
      this.cowsayCtrl.resetCow();  
      expect(this.cowsayCtrl.state).toEqual(expectedResult);
      expect(this.cowsayCtrl.stateArray.length).toEqual(0);
    });
  });

   describe('testing stateArray length --> #show value in resetCow()', () => {
    it('should return false value', () => {
      let expectedResult = '\n' + cowsay.say({text: 'hello', f: this.cowsayCtrl.currentCow});
      this.cowsayCtrl.copyCow('hello'); 
      this.cowsayCtrl.copyCow('world');
      this.cowsayCtrl.resetCow();  
      this.cowsayCtrl.resetCow(); 
      expect(this.cowsayCtrl.show).toBe(false);
    });
  });

  describe('testing #cowsay.list()', () => {
    it('should return cowsay-lists', () => {
      expect(this.cowsayCtrl.cowfiles.length).toEqual(46);
    });
  });








});