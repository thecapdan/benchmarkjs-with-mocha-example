var should = require('chai').should();
var Utils = require('../src/Utils');

describe('Utils: fibo looping method', function() {
  it('works for 2', function() {
  	Utils.fiboLooping(2).should.equal(1);
  });

  it('works for 5', function() {
  	Utils.fiboLooping(5).should.equal(5);
  });

  it('works for 10', function() {
  	Utils.fiboLooping(10).should.equal(55);
  });
});

describe('Utils: fibo recursive method', function() {
  it('works for 2', function() {
  	Utils.fiboRecursive(2).should.equal(1);
  });

  it('works for 5', function() {
  	Utils.fiboRecursive(5).should.equal(5);
  });

  it('works for 10', function() {
  	Utils.fiboRecursive(10).should.equal(55);
  });
});

describe('Utils: fibo recursive with cache method', function() {
  it('works for 2', function() {
  	var cache = {};
  	Utils.fiboWithCache(2, cache).should.equal(1);
  	Utils.fiboWithCache(2, cache).should.equal(1);//retreived from cache
  });

  it('works for 5', function() {
  	var cache = {};
  	Utils.fiboWithCache(5, cache).should.equal(5);
  	Utils.fiboWithCache(5, cache).should.equal(5);//retreived from cache
  });

  it('works for 10', function() {
  	var cache = {};
  	Utils.fiboWithCache(10, cache).should.equal(55);
  	Utils.fiboWithCache(10, cache).should.equal(55);//retreived from cache
  });
});