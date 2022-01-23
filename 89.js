var MAX_LENGTH = 5;
function checkStr(value) {
return value && value.length <= MAX_LENGTH;
}
var result = checkStr('pineapple');
console.log(result);