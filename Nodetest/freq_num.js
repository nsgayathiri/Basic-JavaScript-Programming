const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));

var arr = [];
for(var count = 0; count < num; count = count + 1)
{
 arr.push(Number(prompt('Enter the Array Element:')));
}


var check_num = Number(prompt('Enter the number to Check:'));

var freq = 0;
var count2 = 1;

for(var count1 = 0; count1 < num ;count1 = count1 + 1)
{
  if(check_num == arr[count1])
  {
    freq = freq + count2;
  }
}
console.log(freq); 
   
