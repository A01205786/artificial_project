var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var a = 0;

rl.on('line', (input) => {
  a = parseInt(input);
  // console.log(`Received: ${input}`);
});

var b = 0;

rl.on('line', (input) => {
  b = parseInt(input);
  // console.log(`Received: ${input}`);
});


var c = a + b;
console.log(c);
