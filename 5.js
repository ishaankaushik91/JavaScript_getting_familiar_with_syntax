// Sigma k^2 - 3kx + 1
let Sum = 0, x = 10;

for (let k = 2; k <= 10; k++)
{
    Sum += (k * k) - (3 * k * x) + 1;
}
console.log("%d", Sum);