// Printing all elements of objects one by one (RECURSION)
let Humans = {

    1 : "Hello Uncle Namaste",
    2 : 89,
    3 : 13,
    4 : 12,
    5 : 11,
    6 : "Pussy Cat",
}

Access(1, Humans);

function Access(index, obj)
{
    if (index <= 6)
    {
        console.log(obj[index]);
        return Access(index + 1, obj);
    }
    return 0;
}