// Pi (n + x)
let Pi = 1, x = 2;

for (let n = 0; n <= 3; n++)
{
    Pi *= (n + x);
}
console.log("%d", Pi);