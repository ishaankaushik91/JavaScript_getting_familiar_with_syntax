// First function
function Summation(number)
{
    if (number <= 10)
    {
        return number + Summation(number + 1);
    }
    return 0;
}
console.log("%d", Summation(0));