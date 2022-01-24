// Printing Cousin Primes (Purely Recursive)
function Increment(range) {
    if (range <= 1000) {
        if ((PrimeCheck(2, range) == 0) && (PrimeCheck(2, range + 4) == 0)) {
            console.log(range, range + 4);
            return Increment(range + 1);
        }
        return Increment(range + 1);
    }
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

Increment(1);