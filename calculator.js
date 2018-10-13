var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var arr = [];
var i = 0;
var result = 0;

// rl.on('line', function(line){
//   // console.log(parseInt(line));
//   arr[i++] = parseInt(line);
//   console.log();
// });

rl.on('line', (line) => {
  arr[i++] = parseInt(line);
}).on('close', () => {
  var res = arr[0] + arr[1];
  console.log(res);
  process.exit(0);
});
