const prompt = require('prompt-sync')();
var num= Number(prompt('Enter the Number:'));

var sum = 0;

for(var divisor = 1 ; divisor < num ; divisor = divisor + 1)
{
  if(num%divisor == 0)
   { 
     sum = divisor + sum;
     
   }
}

  if(num == sum)
   {
     console.log("It is Perfect Number");

   }
   else
   {
     console.log("It is not a Perfect Number");
   }
