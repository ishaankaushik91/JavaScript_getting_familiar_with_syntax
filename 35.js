// Filtering Primes from Array in object (LOOP)
let test = {
    "Oh" : "Yeahhhh",
    Arr : [1, 2, 11, 21, 25, 89],
}

for (let i = 0; i < test.Arr.length; i++)
{
    if (PrimeCheck(test.Arr[i]) == 0)
    {
        console.log(test.Arr[i]);
    }
}

function PrimeCheck(num)
{
    for (let i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            return -1;
        }
    }
    return 0;
}