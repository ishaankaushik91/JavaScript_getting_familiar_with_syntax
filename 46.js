var data = [[1, 3, 4], [9, 9], [2, 5, 6, 7, 8], [99], [0, 0, 0, 100]];
var m = 0, data2 = []

for (let i = 0; i < data.length; i++)
{
    for (let j = 0; j < data[i].length; j++)
    {
        data2[m] = data[i][j];
        m++;
    }
}
console.log(data2);