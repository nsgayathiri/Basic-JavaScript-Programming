const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the number:'));

var arr = [];
for(var count = 0; count < num; count = count + 1)
{
 arr.push(Number(prompt('Enter the Array Element:')));
}
var sum = 0;

for(count1 =0 ;count1 < num ; count1 = count1 + 1)
{
  sum = sum + arr[count1];
}

for(var count2 = 0 ; count2 < num; count2 = count2 + 1)
{
  var Final_sum = arr[count2] / sum;
  var Final_Sum_Percentage = Final_sum * 100;

  console.log("Percentage % of" + arr[count2]+ "Element in final Sum:"+Final_Sum_Percentage);
}