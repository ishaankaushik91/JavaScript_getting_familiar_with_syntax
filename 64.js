function getResult(value)
{
    if (value.length < 4)
    {
        return 'short';
    }
    return 'long';
}

let result = getResult('hello');
console.log(result);