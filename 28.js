// Searching a String
let A = "I see the crystal raindrops fallin' the beauty";

console.log(A.indexOf(" ")); // Gives the index of element given (1st encounter)
console.log(A.indexOf(" ", 3));// Gives the index of element given after the given index
console.log(A.indexOf("1")); // Gives -1 if element not there
console.log(A.lastIndexOf("y")); // Gives -1 if index doesn't end with given element or else the index

console.log(A.startsWith("I"));// Gives true if string starts with given stuff else false
console.log(A.endsWith("ty"));// Gives true if string ends with given stuff else false
console.log(A.includes("cry"));// Gives true if string has the given element else false
console.log(A.replace("cry", "pussy"));// Replaces the given string (only 1st occurence) with given one (to be replaced)
