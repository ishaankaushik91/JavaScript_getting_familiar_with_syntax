// Sigma Cousin Primes (Purely Recursive)
function Increment(r) {
    if (r <= 1000) {
        if (PrimeCheck(2, r) == 0 && (PrimeCheck(2, r + 4) == 0)) {
            return (r + (r + 4)) + Increment(r + 1);
        }
        return Increment(r + 1);
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