// N primes
let number = 100;

for (let i = 0; i < number; i++) {
    let check = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            check = 1;
            break;
        }
    }
    if (check == 0) {
        console.log("%d", i);
    }
}