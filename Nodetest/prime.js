const prompt = require('prompt-sync')();
var num= Number(prompt('Enter the Number:'));

if(num<=1)
{
  console.log("It is a Prime");
}


for(var count = 2 ; count<=num ; count = count + 1)
{
    if(num%count==0)
   {
     if(num==count)
      {
        console.log("It is Non-Prime");
        count = num;
      }
      else
      {
        console.log("It is Prime");
      }
   }

}
    
   

   