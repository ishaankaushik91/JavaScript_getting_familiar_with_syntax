// Printing Cousin Primes (Loop)
function Increment(range) {
    if (range <= 1000) {
        if ((PrimeCheck(range) == 0) && (PrimeCheck(range + 4) == 0)) {
            console.log(range, range + 4);
            return Increment(range + 1);
        }
        return Increment(range + 1);
    }
}

function PrimeCheck(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return -1;
        }
    }
    return 0;
}

Increment(1);