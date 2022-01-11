// Fibonnaci series
function Fibonacci(number)
{
    if (number == 0)
    {
        return 0;
    }
    if (number == 1)
    {
        return 1;
    }

    return Fibonacci(number - 1) + Fibonacci(number - 2);
}

for (let i = 0; i <= 100; i++)
{
    console.log("%d", Fibonacci(i));
}