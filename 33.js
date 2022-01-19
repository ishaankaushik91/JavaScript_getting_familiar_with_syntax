// Printing Pattern (RECURSIVELY)
for (let i = 1; i <= 5; i++) {
    P(i, 1);
}

function P(num, i) {
    if (i <= num)
    {
        let str = "";
        str += i;

        if (i == num)
        {
            console.log(str);
        }
        return P(num, i + 1);
    }
}