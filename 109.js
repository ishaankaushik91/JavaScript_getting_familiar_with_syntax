// toFixed() --> helps in printing number upto given decimal point
let num = 10.873928;
console.log(num.toFixed(0)); // Round figures --> 11
console.log(num.toFixed(2)); // --> 10.87
// toExponential() --> Converts num to string using scientific notation
console.log(num.toExponential(1)); // --> 1.1e+1
console.log(num.toExponential(2)) // --> 1.09e+1