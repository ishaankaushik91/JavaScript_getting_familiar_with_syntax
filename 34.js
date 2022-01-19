// Filter numbers only from Object (LOOP)
let i = {
    1 : "hello",
    2 : 10,
    3 : 11,
}

for (let o = 1; o <= 3; o++)
{
    if (typeof(i[o]) == 'number')
    {
        console.log(i[o]);
    }
}