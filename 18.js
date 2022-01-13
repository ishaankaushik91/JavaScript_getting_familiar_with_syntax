// Finding duplicate in Array
let A = [100, 10, 9, 1000, 8, 2, 100]

for (let i = 0; i < 7; i++)
{
    for (let j = i + 1;j < 7; j++)
    {
        if (A[i] == A[j])
        {
            console.log("Found a duplicate at %d of %d", j, A[i]);
        }
    }
}