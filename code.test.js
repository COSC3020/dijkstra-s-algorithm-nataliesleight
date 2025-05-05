const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [
  [0,1,4],
  [1,0,2],
  [4,2,0]
  ];
var result = dijsktra(testGraph1,2);
jsc.assert(JSON.stringify(result) == JSON.stringify([3,2,0]));

var testGraph2 = [
  [0,1,4,0],
  [1,0,2,6],
  [4,2,0,3],
  [0,6,3,0]
  ];

var result = dijsktra(testGraph2,3);
jsc.assert(JSON.stringify(result) == JSON.stringify([6,5,3,0]));

var testGraph3 = [ // this is the graph with an isloated node
  [0,0,1,3],
  [0,0,0,0],
  [0,0,0,1],
  [0,0,1,0]
  ];

var result = dijsktra(testGraph3,0);
jsc.assert(JSON.stringify(result) == JSON.stringify([0,Infinity,1,2]));

var testGraph4 = [
  [0,2,0,1,0],
  [2,0,3,0,0],
  [0,3,0,4,0],
  [1,0,4,0,5],
  [0,0,0,5,0]
  ];

var result = dijsktra(testGraph4,4);
jsc.assert(JSON.stringify(result) == JSON.stringify([6,8,9,5,0]));

var testGraph5 = [
  [0,7,0,0,0],
  [7,0,8,2,0],
  [0,8,0,5,0],
  [0,2,5,0,3],
  [0,0,0,3,0]
  ];

var result = dijsktra(testGraph5,2);
jsc.assert(JSON.stringify(result) == JSON.stringify([14,7,0,5,8]));
