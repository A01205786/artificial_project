var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var arr = [];

rl.on('line', function(line){
  arr.push(parseInt(line));
  // console.log(line);
  // console.log(typeof(line));


  var result = arr[0] + arr[1];
  // console.log(result);
});
