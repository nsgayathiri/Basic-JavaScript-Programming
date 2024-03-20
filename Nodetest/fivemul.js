const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));
console.log(num);
if(num%5==0)
{
  console.log(num);
}
if(num%5==1)
{
  num = num-1;
  console.log(num);
}
if(num%5==2)
{
  num = num-2;
  console.log(num)
}
if(num%5==3)
{
  num = num+2;
  console.log(num);
}
if(num%5==4)
{
  num = num+1;
  console.log(num);
}