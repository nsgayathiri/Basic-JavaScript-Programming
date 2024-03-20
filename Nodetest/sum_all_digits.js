const prompt = require('prompt-sync')();
var num = Number(prompt('Enter the Number:'));

var res = 0;
var Q = num;

while (Q != 0) 
{
    var rem = Q % 10; 
    res = res + rem; 
    Q = Q / 10;
}

console.log(res); 
