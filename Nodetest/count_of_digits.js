const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

var count = 1;
var rem = num % 10;

while (rem != num)
{ 
    num = num / 10; 
    if (num != 0)
    {
        count++; 
    }
    rem = num % 10; 
}

console.log(count); 
