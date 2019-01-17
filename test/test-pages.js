var expect  = require('chai').expect;
var d=require('../app.js');
var request = require('request');
var assert = require('assert');
var res=' good morning';

  describe('checking test file', function() {
	  
    it('checking disp funcion', function(){
     expect(res).to.equal(d.disp());
    });
	it('checking add method',function(){
		expect(7).to.equal(d.add(3,4));
	});
  });
