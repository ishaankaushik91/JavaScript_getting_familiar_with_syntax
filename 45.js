var data = ["nehra", "prash", "adnan", "sleep", "BEJAMIN", "MSDhoni", "Kohli"];


for (let i = 0; i < data.length; i++) {
    data[i] = data[i][0].toUpperCase() + data[i].substring(1).toLowerCase();
}
console.log(data);