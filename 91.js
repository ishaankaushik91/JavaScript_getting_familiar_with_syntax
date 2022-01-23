var vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowels(inputString) { var count = 0;
for (var i = 0; i < inputString.length; i += 1) { var character = inputString.charAt(i);
if (vowels.indexOf(character) !== -1) {
count += 1; }
}
return count; }
var result = countVowels('boolean');
console.log(result);