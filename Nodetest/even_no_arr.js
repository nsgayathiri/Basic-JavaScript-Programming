const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));

var arr = [];
for(var count = 0 ; count < num ;count = count + 1)
{
arr.push(Number(prompt('Enter the array Element:')));
}

for(var count1 = 0;count1 < num ; count1 = count1+1)
{
  if(arr[count1]%2 == 0)
  {
    console.log("Even numbers are:"+arr[count1]);
  }
}
  


