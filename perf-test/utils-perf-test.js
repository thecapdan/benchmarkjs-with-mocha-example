var should = require('chai').should();
var expect = require('chai').expect;
var Utils = require('../src/Utils');
var Benchmark = require('benchmark');

const BENCHMARK_MIN_OPS = {

	looping : 30000000,
	recursive : 2000000,
	withCaching : 40000000

};

var satisfiesBenchmark = false;

var benchmarkOptions = {
		'onError': function(event) {
			throw new Error("Benchmark error for fiboLooping");
		},
		'onComplete': function(event) {
			console.log('Time taken: ' + this.times.elapsed + '. Bench stats:' + String(event.target));
			expect(this.hz).to.be.at.least(BENCHMARK_MIN_OPS[this.name]);
		}
};

describe('Utils performance', function() {
	beforeEach(function() {
	    satisfiesBenchmark = true;
	});

	describe('Fibo looping', function() {
	  it('can perform within given benchmark for operations per second', function() {
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

	describe('Fibo recursive', function() {
	  it('can perform within given benchmark for operations per second', function() {
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

	describe('Fibo recursive with cache', function() {
	  it('can perform within given benchmark for operations per second', function() {
	  	this.timeout(10000);//mocha timeout 10 seconds
	  	var cache = {};
	  	var suite = new Benchmark.Suite;
	  	suite.add('withCaching',
			function() {
			  	Utils.fiboWithCache(8, cache);
			},
			benchmarkOptions
		);
		suite.run({maxTime: 10}); //benchmark max time 10 seconds
		});
	});

});