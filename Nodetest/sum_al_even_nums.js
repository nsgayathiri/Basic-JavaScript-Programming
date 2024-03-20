const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

var res = 0;
var Q = num;

while(Q != 0)
{
  var rem = Q % 10;
  Q = Q / 10;
  if(rem % 2 == 0)
   {
     res = res + rem;
   }
}
console.log(res);
