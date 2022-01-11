// Sigma Sigma 3ij
let Sum = 0;

for (let i = 1; i <= 2; i++)
{
    for (let j = 4; j <= 6; j++)
    {
        Sum += (3 * i * j);
    }
}
console.log("%d", Sum);