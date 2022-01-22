var everything = ['awesome', 'awesome', 'awesome'];
function isAwesome(item) 
{
    return item === 'awesome';
}
var result = everything.filter(isAwesome).length === everything.length;
console.log(result);