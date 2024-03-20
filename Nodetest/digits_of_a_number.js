const prompt = require('prompt-sync')();
var num = prompt('Enter the number:');

var final ="";
var Quotient = num;

while(Quotient != 0)
{
  var rem = Quotient % 10;
  

  if(rem == 0)
  {
    var final = "Zero" + final;
  }
  else if(rem == 1)
  {
    var final = "One" + final;
  }
  if(rem == 2)
  {
    var final = "Two" + final;
  }
  if(rem == 3)
  {
    var final = "Three" + final;
  }
  if(rem == 4)
  {
    var final = "Zero" + final;
  }
  if(rem == 5)
  {
    var final = "Five" + final;
  }
  if(rem == 6)
  {
    var final = "Six" + final;
  }
  if(rem == 7)
  {
    var final = "Seven" + final;
  }
  if(rem == 8)
  {
    var final = "Eight" + final;
  }
  if(rem == 9)
  {
    var final = "Nine" + final;
  }
   
  var Quotient = Math.floor(Quotient / 10);

}
console.log(final);


