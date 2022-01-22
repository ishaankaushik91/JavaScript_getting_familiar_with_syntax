function getSal(title, firstName, lastName)
{
    let sal;
    if (!title)
    {
        sal = firstName + " " + lastName;
    }
    else
    {
        sal = title + " " + lastName;
    }
    return sal;
}
let result = getSal('Miss', 'Jane', 'Marple');
console.log(result);