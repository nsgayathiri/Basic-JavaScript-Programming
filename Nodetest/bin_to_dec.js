const prompt = require('prompt-sync')();
var bin_num = prompt('Enter the binary number:');

var rem = bin_num % 10;
var Quotient = Math.floor(bin_num / 10);
var count = 0;
var pow_count = 1;

if(count == 0)
{
  var sum = 1*rem;
}
else
{
  count = count + 1
  while(Quotient != 0)
  {
    rem =Quotient % 10 
    Quotient = Math.floor(Quotient / 10);
    var pow_value = 2 * pow_value;
    var res = pow_value * rem;
    sum += res;
  }
console.log(sum);
}
