// Storing primes in Array inside Object
let O = {
    "numbers": new Array(111)
}

for (let i = 0; i < O.numbers.length; i++) {
    if (PrimeCheck(i) == 0) {
        O.numbers[i] = i;
        console.log(O.numbers[i]);
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