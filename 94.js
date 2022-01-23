function getDateDifference(ear, lat)
{
    return (lat - ear) / (1000 * 3600 * 24);
}

let s = new Date('2017-01-01');
let e = new Date('2017-01-07');
let result = getDateDifference(s, e);
console.log(result);