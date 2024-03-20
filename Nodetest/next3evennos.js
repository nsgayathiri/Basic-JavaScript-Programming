const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

if(num%2 == 0)
{
  num = num + 2;
  console.log(num);
  num = num + 2;
  console.log(num);
  num = num + 2;
  console.log(num);
}
else
{
  num = num + 1;
  console.log(num);
  num = num + 2;
  console.log(num);
  num = num + 2;
  console.log(num);
}