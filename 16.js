// Sum of Primes in Array
function PrimeCheck(start, end)
{
    if (start < end)
    {
        if (end % start  == 0)
        {
            return -1;
        }
        return PrimeCheck(start + 1, end);
    }

    return 0;
}

// Main
let A = [], Sum = 0;

for (let i = 0; i < 100; i++) {
    A[i] = i ** 2 + 3;
    
    if (PrimeCheck(2, A[i]) == 0)
    {
        Sum += A[i];
        console.log(A[i]);
    }
}
console.log(Sum);