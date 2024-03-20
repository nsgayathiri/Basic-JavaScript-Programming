const prompt = require('prompt-sync')();
var Stud_Count= Number(prompt('Enter the Student Count:'));
var Sub_Count= Number(prompt('Enter the Subject Count:'));

allStudMark = [];

for(var c1  = 0 ; c1 < Stud_Count; c1++)
{
  mark = [];
  for(var c2 = 0; c2 < Sub_Count ; c2++)
  {
  mark.push(Number(prompt('Enter Student Mark:')));
  }

  var sum = 0;
  for(var c3 = 0; c3<Sub_Count ; c3++)
  {
    sum = sum + mark[c3];
  }
  mark[Sub_Count] = sum;
  allStudMark[c1] = mark;
}

for(var c6 = 0; c6 < Sub_Count; c6++)
{
     for(var c4 = 0 ; c4 < Stud_Count - 1;c4++)
    {
      for(var c5 = c4+1 ; c5 < Stud_Count ; c5++)
      {
        var S1marks = allStudMark[c4];
        var S2marks = allStudMark[c5];

        var submark1 = S1marks[c6];
        var submark2 = S2marks[c6];
   
      if(submark1 < submark2)      
      {
         var temp = allStudMark[c4];
         allStudMark[c4] = allStudMark[c5];
         allStudMark[c5] = temp;
      }
      
    }

console.log(c6+"st Subject Rank");
console.log("First Rank:" +allStudMark[0]);
console.log("Second Rank:" +allStudMark[1]);
console.log("Third Rank:" +allStudMark[2]);
   }
}


  
  















