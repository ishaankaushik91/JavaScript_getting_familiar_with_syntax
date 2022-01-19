// All primes in 3 D Matrix (LOOP)
let M =
    [[[1, 3, 5, 7], [10, 11, 31, 4]],
    [[10, 11, 12, 13], [10, 20, 30, 40]]]

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 4; k++) {
            if (PrimeCheck(2, M[i][j][k]) == 0) {
                console.log(M[i][j][k]);
            }
        }
    }
}

function PrimeCheck(i, num) {
    if (i < num) {
        if (num % i == 0) {
            return -1;
        }
        return PrimeCheck(i + 1, num);
    }
    return 0;
}