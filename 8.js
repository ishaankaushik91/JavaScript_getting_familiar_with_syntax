// Pi Pi (3ij)
let pi = 1;

for (let i = 1; i < 5; i++)
{
    for (let j = 4; j <= 6; j++)
    {
        pi *= (3 * i * j);
    }
}
console.log("%d", pi);