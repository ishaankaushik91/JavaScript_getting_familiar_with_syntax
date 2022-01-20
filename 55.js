// Getting ASCII value of Alphabets (LOOP)
let Alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Value(0, Alp);

function Value(i, A = []) {
    if (i < A.length) {
        console.log(A.charCodeAt(i));
        return Value(i + 1, A);
    }
    return 0;
}