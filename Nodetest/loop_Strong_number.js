const prompt = require('prompt-sync')();
var num = prompt('Enter the number:');

for(var count = 1 ;count<=num ; count = count + 1)
{
var Quotient = count;
var sum = 0;
  
while(Quotient != 0)
{
  var res = 1;
  for(var n = Quotient % 10 ; n != 0 ; n = n - 1)
  {
    res *= n;
  }
  sum += res;
  Quotient = Math.floor(Quotient / 10);
 
}
 if (count == sum) 
    {
        console.log(count + " is a Strong number");
    }
}
