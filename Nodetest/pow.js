const prompt = require('prompt-sync')();
var num1= Number(prompt('Enter the Number:'));
var num2 = Number(prompt('Enter the Number:'));

var result = num1 * num1;

for(var count = 3 ; count<=num2 ; count = count+1)
{
  result = num1 * result;
}

console.log(result);

