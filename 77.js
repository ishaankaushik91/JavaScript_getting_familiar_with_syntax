var fruits = ['Banana', 'Pear', 'Apple', 'Mango'];
var sorted = fruits.sort(function (string1, string2) {
    return string1.length - string2.length;
});
var result = sorted[0];
console.log(result);