// Sum of all Primes in 3 D Matrix (LOOP)
let Nums =
    [[[1, 2, 3, 4], [10, 2], [21, 23]],
    [[28, 19], [101, 102], [43, 57, 9, 1]]];

let sum = 0;

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < Nums[i].length; j++) {
        for (let k = 0; k < Nums[i][j].length; k++) {
            if (PrimeCheck(Nums[i][j][k]) == 0) {
                sum += Nums[i][j][k];
            }
        }
    }
}
console.log(sum);

function PrimeCheck(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return -1;
        }
    }
    return 0;
}