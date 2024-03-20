const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

for(var count = 1; count<=10 ; count = count+1)

{
  var result = num * count
  console.log(num+"*"+count +"="+ result);
}
  