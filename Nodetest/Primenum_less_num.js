const prompt = require('prompt-sync')();
var num = prompt('Enter the number:');

var count = 1;
var num,rem,sum;

while(count < (num-1))
{
  divisor = 2;
  num = num - count;
  if(num % divisor == 0)
  {
    if(num == divisor)
    {
    var org_num = num;
    var Quo = num;
    if(Quo != 0)
    {
      var sum = 0;
      rem = Quo % 10 ;
      sum += rem;
      Quo = Math.floor(Quo / 10);
    }
    if(sum == org_num)
    {
      console.log(sum);
    }
    }
   count = count + 1;
  }
 }









  