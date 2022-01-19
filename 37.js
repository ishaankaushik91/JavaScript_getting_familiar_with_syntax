// Getting nested objects elements (LOOP)
let YooYoo = {
    "Ishaan": {
        1: "One 2 ka 4 4 two ka 1 my name is ratan",
        2: 89,
        3: 69,
        4: 101,
    }
}

for (let i = 1; i <= 4; i++) {
    console.log(YooYoo.Ishaan[i]);
}