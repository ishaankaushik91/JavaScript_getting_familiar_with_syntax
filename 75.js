function containCarbon(compund)
{
    if (compund.indexOf('C') === -1)
    {
        return 'no';
    } 
    return 'yes';
}
let result = containCarbon('H2O');
console.log(result);