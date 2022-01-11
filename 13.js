// 1/1! + 4/2! + 27/3! + .......
function Factorial(number) {
    if (number >= 1) {
        return number * Factorial(number - 1);
    }
    return 1;
}

function Power(i, num) {
    if (i <= num) {
        return num * Power(i + 1, num);
    }
    return 1;
}

let Sum = 0;

for (let i = 1; i <= 5; i++) {
    Sum += Power(1, i) / Factorial(i);
}

console.log("%d", Sum);