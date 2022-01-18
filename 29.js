// Objects
// Its a data type declared with {}
// Contains group of properties (key : value)
var Human = {
    fname: "Prash",
    lname: "BM",
    age: 55,
    address: "Banglore",
    alive: true, // Trailing comm, hanging comma
}
var address = "fname"
console.log(address["fname"]);
console.log(Human);// Gives whole
console.log(Human.address); // dot operation (Asccessing value of a specific key)
console.log(Human["age"]); // string key accessing value of key
