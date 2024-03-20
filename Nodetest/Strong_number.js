const prompt = require('prompt-sync')();
var num = prompt('Enter the number:');


var Quotient = num;
var sum = 0;
  
while(Quotient != 0)
{
  var res = 1;
  for(var n = Quotient % 10 ; n != 0 ; n = n - 1)
  {
    res = n*res;
  }
  sum = res + sum;
  Quotient = Math.floor(Quotient / 10);
 
}
if(num == sum)
{
   console.log("It is Strong number");
}
else
{
   console.log("It is not a Strong Number");
}