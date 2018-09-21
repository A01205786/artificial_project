var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

var arr = [];
var i = 0;
rl.on('line', function(line){
  arr.push(parseInt(line));
  i++;
  if(i == 2){
    var result = arr[0] + arr[1];
    console.log(result);
  }
});
