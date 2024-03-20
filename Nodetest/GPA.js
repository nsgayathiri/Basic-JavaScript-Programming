const prompt = require('prompt-sync')();
var no_of_subjects = prompt('Enter the number of Subjects:');

var Total_mark = 0;
var Total_Credit = 0;
var Grade;

for(var count = 0; count < no_of_subjects; count = count + 1)
{
  var Mark = prompt('Enter the Mark:');
   
  if(Mark >= 90)
  {
    Grade = 10;
  }
  if(Mark >= 80)
  {
    Grade = 9;
  }
  if(Mark >= 70)
  {
    Grade = 8;
  }
  if(Mark >= 60)
  {
    Grade = 7;
  }
  if(Mark >= 50)
  {
    Grade = 6;
  }
  if(Mark >= 45)
  {
    Grade = 5;
  }

  var Sub_Credit = prompt('Enter the Subjects Credit:');
  var Sub_Total = Grade * Sub_Credit;
  Total_mark += Sub_Total;
  Total_Credit += Sub_Credit;

}

var GPA = Total_mark / Total_Credit;
console.log("Your GPA is:"+GPA);


