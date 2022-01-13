// n power n (Recursively)
function power(i, number)
{
    if (i <= number)
    {
        return number * power(i + 1, number);
    }
    return 1;
}

for (let i = 0; i <= 10; i++)
{
    console.log(power(1, i));
}