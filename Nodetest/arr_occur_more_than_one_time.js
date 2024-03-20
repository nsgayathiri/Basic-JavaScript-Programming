const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));

var arr = [];
for(var count = 0; count < num; count = count + 1)
{
 arr.push(Number(prompt('Enter the Array Element:')));
}

var temp;
for(var count = 0; count < (num-1) ; count = count + 1)
{
  for(count1 = count + 1; count1 < num ; count1 = count1 + 1)
  {
    if(arr[count] < arr[count1])
    {
      temp = arr[count];
      arr[count] = arr[count1];
      arr[count1] = temp;
    }
  }
}
for(count = 0 ; count < num ;count = count + 1)
{
  console.log(arr[count]);
}

var sum = 1;

for(var count = 0; count < (num-1) ; count = count + 1)
{
  for(count1 = count + 1; count1 < num ; count1 = count1 + 1)
  {
    while(arr[count] == arr[count1])
    {
     sum = sum + 1;
     count = count + 1;
     count1 = count + 1;
    }
    if(sum > 1)
    {
      console.log("The Element occur more than One Time:"+arr[count]);
      break;
    }
    
  }
}
   

