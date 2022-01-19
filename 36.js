// Filtering Primes from Array in object (RECURSION)
let test = {
    "Oh": "Yeahhhh",
    Arr: [1, 2, 11, 21, 25, 89],
}

Yoo(0, test.Arr);

function Yoo(index, Arr = []) {
    if (index < Arr.length) {
        if (PrimeCheck(2, Arr[index]) == 0) {
            console.log(Arr[index]);
        }
        return Yoo(index + 1, Arr);
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