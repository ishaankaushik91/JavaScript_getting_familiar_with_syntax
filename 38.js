// Getting nested objects elements (RECURSION)
let YooYoo = {
    "My" : "Hi",
    "Ishaan": {
        1: "One 2 ka 4 4 two ka 1 my name is ratan",
        2: 89,
        3: 69,
        4: 101,
    }
}

A(1, YooYoo.Ishaan);

function A(i, Obj)
{
    if (i <= 4)
    {
        console.log(Obj[i]);
        return A(i + 1, Obj);
    }
}