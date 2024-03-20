const prompt = require('prompt-sync')();
var min= prompt('Enter the minute:');

var count = 0;
var count1 = 0;
var min;
var sec;
if(min < 10)
{
  for(count1 =0; count1 != min; count1 =count1 + 1)
  {
    if(count == 0)
    { 
      var sec ="00";
      console.log("0" + min + ":" + sec);
      count = count + 1;
      min = min -1;
    } 
    else
    {
      for(count = 1 ; count != 51; count = count + 1)
      {
        sec = 60 - count;
        console.log("0" + min + ":" + sec);
      }  
    }
    for(count = 51 ; count < 60 ; count = count + 1)
    {
      sec = 60 - count;
      console.log("00" + min + ":" + "0" + sec);
    }
    count = 0;
  }
}

else
{
  for(count = 0 ; count1 = min ; count1 = count1 + 1)
  {
    for(count = 0 ; count <= 0 ; count = count + 1)
    {
      sec = "00";
      console.log("0" +min + ":" + sec);
      min = min - 1;
    }
    for(count = 1 ; count != 51 ; count = count + 1)
    {
      sec = 60 - count;
      console.log("0" + min + ":" + sec);
    }
    for(count = 51 ; count <60 ; count = count + 1)
    {
      sec = 60 -count;
      console.log("0" + min + ":"+ "0" + sec);
    }
    
    count = 0;
   }
}



























 

      