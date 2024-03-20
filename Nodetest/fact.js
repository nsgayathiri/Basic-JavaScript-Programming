const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));

var count = 1;
var result = 1; 
while(count <= num) 
{
  result *= count;
  count++;
}

console.log(result);
