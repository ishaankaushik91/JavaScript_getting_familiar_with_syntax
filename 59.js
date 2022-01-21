// Storing Primes in a 3 D Matrix (RECURSION)
var Matrix = [[[0], [0]], [[0, 0, 0]]];
let o = 2;

for (let i = 0; i < Matrix.length; i++) {
    for (let j = 0; j < Matrix[i].length; j++) {
        for (let k = 0; k < Matrix[i][j].length; k++) {
            if (PrimeCheck(2, o) == 0) {
                Matrix[i][j][k] = o;
                console.log(Matrix[i][j][k]);
                o++;
            }
            o++;
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