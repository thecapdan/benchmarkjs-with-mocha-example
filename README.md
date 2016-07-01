# benchmarkjs-with-mocha-example

### Purpose

Simple example to try out use of benchmarkjs with mocha. (Dev day trial)

### System Under Test

A simple utility class that uses 3 different methods to return the fibonacci number for a given index in the sequence. For example:

```
Utils.fiboLooping(4) //returns 3
``` 

### Benchmark Suite and Tests

There is a benchmark suite which can be found in bench/suite.js. This is a plain benchmarkjs suite which compares all 3 fibonacci methods and outputs the method which performs best under repeated cycles. This suite can be run with:

```
npm run bench
``` 

There is also a set of mocha tests which tests each of the Utility class methods in test/utils-test.js. To run these tests:

```
npm run test
``` 

Finally, there is a set of mocha tests which utilises benchmarkjs to regression test the performance of each of the Utility methods. To run these tests, run:

```
npm run performance
```

This is a work in progress and for the next dev day I may revisit how to better use the benchmarkjs API to test performance, as well as investigate browser support