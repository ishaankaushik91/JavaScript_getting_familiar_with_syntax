// Sigma Primes * Primes (Purely Recursion)
function Increment(i) {
    if (i <= 1000) {
        if (PrimeCheck(2, i) == 0) {
            return (i * i) + Increment(i + 1);
        }
        return Increment(i + 1);
    }
    return 0;
}

function PrimeCheck(s, num) {
    if (s < num) {
        if (num % s == 0) {
            return -1;
        }
        return PrimeCheck(s + 1, num);
    }
    return 0;
}

console.log(Increment(1));