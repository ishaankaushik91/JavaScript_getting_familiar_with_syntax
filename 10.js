// (1!/1) + (2!/2) + (3!/3) + (4!/4) + (5!/5) + ... + (n!/n)
function factorial(number) {
    if (number >= 1)
        return number * factorial(number - 1);

    return 1;
}
function Summation(num) {
    if (num >= 1)
        return num + Summation(num - 1);
    return 0;
}

let Sum = 0;

for (let i = 1; i <= 5; i++) {
    Sum += factorial(i) / Summation(i);
}
console.log("%d", Sum);