// Converting Last letter to Upper n first to Lower (LOOP)
var data = {
    "Names": ["Ishaan", "Prash", "Suhail", "Ruqqayahh", "Adnan"],
    "LastNames": ["Kaushik", "BM", "Roushan", "Sara", "Ali"]
}

for (let i = 0; i < data.Names.length; i++) {
    let str = "";
    for (let j = 1; j < data.Names[i].length; j++) {
        str += data.Names[i][j];
        if (j == data.Names[i].length - 1) {
            str += data.Names[i][j].toUpperCase();
        }
    }
    data.Names[i] = data.Names[i][0].toLowerCase() + str;
    console.log(data.Names[i]);
}