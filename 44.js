var data = ["nehra", "prash", "adnan", "sleep", "BEJAMIN", "MSDhoni", "Kohli"];


for (let i = 0; i < data.length; i++) {
    let str = "";
    for (let j = 1; j < data[i].length; j++) {
        str += data[i][j];
    }
    data[i] = data[i][0].toUpperCase() + str.toLowerCase();
}
console.log(data);