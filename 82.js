var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split(''); // ['a', 'b', ..]
function letterForNumber(input) 
{ 
    if (input < 1 || input > 26) 
    {
        return '-'; 
    }
return lettersArray[input - 1]; }
var result = letterForNumber(3);
console.log(result);