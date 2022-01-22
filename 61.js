// Product of all Primes in Object (LOOP)
let D = {
    1: 10,
    2: 1,
    3: 3,
    4: 9,
    5: 5,
    6: 7,
    7: 2,
}

console.log(Call(D));

function Call(O) {
    let pi = 1;
    for (let i = 1; i <= 7; i++) {
        if (PrimeCheck(O[i]) == 0) {
            pi *= D[i];
        }
    }
    return pi;
}

function PrimeCheck(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return -1;
        }
    }
    return 0;
}