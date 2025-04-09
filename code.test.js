const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [
  [0,1,4],
  [1,0,2],
  [4,2,0]
  ];
var result = dijsktra(testGraph1,2);
assert(JSON.stringify(result) == JSON.stringify([3,2,0]));

var testGraph2 = [
  [0,1,4,0],
  [1,0,2,6],
  [4,2,0,3],
  [0,6,3,0]
  ];

var result = dijsktra(testGraph2,3);
assert(JSON.stringify(result) == JSON.stringify([6,5,3,0]));

var testGraph3 = [
  [0,3,0,0],
  [3,0,1,2],
  [0,1,0,4],
  [0,2,4,0]
  ];

var result = dijsktra(testGraph3,1);
assert(JSON.stringify(result) == JSON.stringify([3,0,1,2]));

var testGraph4 = [
  [0,2,0,1,0],
  [2,0,3,0,0],
  [0,3,0,4,0],
  [1,0,4,0,5],
  [0,0,0,5,0]
  ];

var result = dijsktra(testGraph4,4);
assert(JSON.stringify(result) == JSON.stringify([6,5,9,6,0]));

var testGraph5 = [
  [0,7,0,0,0],
  [7,0,8,2,0],
  [0,8,0,5,0],
  [0,2,5,0,3],
  [0,0,0,3,0]
  ];

var result = dijsktra(testGraph5,2);
assert(JSON.stringify(result) == JSON.stringify([15,8,0,5,8]));
