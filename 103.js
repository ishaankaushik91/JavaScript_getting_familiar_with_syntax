// Sigma Cousin Primes (LOOP)
function Increment(r) {
    let sum = 0;
    for (r = 1; r <= 1000; r++) {
        if ((PrimeCheck(r) == 0) && (PrimeCheck(r + 4) == 0)) {
            sum += (r + (r + 4));
        }
    }
    console.log(sum);
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