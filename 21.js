// n power m (Recursively)
function horsepower(number, start, range)
{
    if (start <= range)
    {
        return number * horsepower(number, start + 1, range);
    }
    return 1;
}
let Num = 5;
console.log(horsepower(Num, 1, 2));