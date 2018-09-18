var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var a = 0;
var b = 0;

rl.on('line', function(line){
  a = parseInt(line);
});

rl.on('line', function(line){
  b = parseInt(line);
});

var c = a + b;

console.log(c);
