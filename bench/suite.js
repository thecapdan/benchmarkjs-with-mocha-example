var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var Utils = require('../src/Utils');

suite.add('fiboLooping', function() {
  	Utils.fiboLooping(2);

})
.add('fiboRecursive', function() {
  	Utils.fiboRecursive(2);
})
.add('fiboWithCache', function() {
	var cache = {};
  	Utils.fiboWithCache(5, cache);
})
.on('cycle', function(event) {
  console.log("BLAH " + String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

.run({ 'async': true });