// Reverse Fibonacci 
function Fibo(nth) {
    if (nth == 0) {
        return 0;
    }
    if (nth == 1) {
        return 1;
    }
    return Fibo(nth - 1) + Fibo(nth - 1);
}

function Reverse(i, A = []) {
    if (i >= 0) {
        console.log(A[i]);
        return Reverse(i - 1, A);
    }
    return 0;
}

let A = [];

for (let index = 0; index < 20; index++) {
    A[index] = Fibo(index);
}

Reverse(19, A);