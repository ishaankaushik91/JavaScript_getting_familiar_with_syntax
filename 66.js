function getRes(arr)
{
    if (arr.length)
    {
        return 'full';
    }
    return 'empty';
}
let result = getRes([1, 2, 3]);
console.log(result);