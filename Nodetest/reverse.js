const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

var res = 0;

while(num != 0)
{
  var rem = num % 10;
  res = res * 10; 
  res = res + rem; 
  num = Math.floor(num / 10); 
}
console.log(res);
