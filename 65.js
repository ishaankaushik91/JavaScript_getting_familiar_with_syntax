function getResult(bool1, bool2)
{
    return bool1 || bool2 ? 'one or more' : 'neither';
}
let result = getResult(true, false);
console.log(result);