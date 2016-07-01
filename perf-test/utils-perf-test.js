var should = require('chai').should();
var Utils = require('../src/Utils');
var Benchmark = require('benchmark');

var benchmarkOptions = {
		'onError': function(event) {
			throw new Error("Benchmark error for fiboLooping");
		},
		'onComplete': function(event) {
			console.log('Time taken: ' + this.times.elapsed + '. Bench stats:' + String(event.target));
		}
	}	

describe('Utils: fibo looping performance', function() {
  it('can complete benchmark cycles in 10 seconds', function() {
  	this.timeout(10000);//mocha timeout 10 seconds
  	var suite = new Benchmark.Suite;
  	suite.add(
  		'looping', 
		function() {
		  	Utils.fiboLooping(8);
		},
		benchmarkOptions
	);

	suite.run({maxTime: 10}); //benchmark max time 10 seconds
  });

});

describe('Utils: fibo recursive performance', function() {
  it('can complete benchmark cycles in 10 seconds', function() {
  	this.timeout(10000);//mocha timeout 10 seconds
  	var suite = new Benchmark.Suite;
  	suite.add('recursive',
  		function() {
		  	Utils.fiboRecursive(8);
		},
		benchmarkOptions
	);
	suite.run({maxTime: 10}); //benchmark max time 10 seconds
  });

});

describe('Utils: fibo recursive with caching performance', function() {
  it('can complete benchmark cycles in 10 seconds', function() {
  	this.timeout(10000);//mocha timeout 10 seconds
  	var cache = {};
  	var suite = new Benchmark.Suite;
  	suite.add('fiboWithCache',
		function() {
		  	Utils.fiboWithCache(8, cache);
		},
		benchmarkOptions
	);
	suite.run({maxTime: 10}); //benchmark max time 10 seconds
  });

});