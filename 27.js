// String Obtainng portion methods
let A = "Bro I'm so hurt, can't even explain. Fuck breakup she used me n then rejected me 😞";
let B = A.substring(0, 3) // Gives 'Bro' 3 is excluded
let C = A.slice(0, 3) // Gives 'Bro' 3 is excluded
let D = A.slice(-3) // Give ' 😞' last 3 chars [NOTE --> EMOJI + 2 BITS]
let E = A.split(","); // Delimiter --> Divides string wherever the given character is encountered
console.log(B);
console.log(C);
console.log(D);
console.log(E);