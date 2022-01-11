// N Prime series
function PrimeCheck(i, number) {
    if (i < number) {
        if (number % i == 0) {
            return 0;
        }
        return PrimeCheck(i + 1, number);
    }
    return 1;
}

function Generate(start, end) {
    if (start <= end) {
        if (PrimeCheck(2, start)) {
            console.log(start);
        }
        return Generate(start + 1, end);
    }
}

Generate(0, 7000);