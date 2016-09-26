'use strict';

// Add support for all files in the test directory
const testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)/);
console.log(testsContext.keys());
testsContext.keys().forEach(testsContext);
