let sum = 0, count = 0;
for (i = 1; i <= 15; i++)
{
    if (i % 2 != 0)
    {
        sum += Factorial(i);
    }
    else
    {
        count += Factorial(i);
    }
}
let real = sum - count;
console.log(PrimeCheck(2, real));

function Factorial(num) {
    if (num >= 1) {
        return num * Factorial(num - 1);
    }
    return 1;
}

function PrimeCheck(i, num)
{
    if (i < num)
    {
        if (num % i == 0)
        {
            return -1;
        }
        return PrimeCheck(i + 1, num);
    }
    return 0;
}