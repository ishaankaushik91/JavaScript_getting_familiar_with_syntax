// Frequency of each element in Array
let A = [];

for (let i = 0; i < 100; i++) {
    A[i] = i;
}

for (let i = 0; i < 100; i++) {
    let Frequency = 0;
    for (let j = 0; j < 100; j++) {
        if (A[i] == A[j]) {
            Frequency++;
        }
    }
    console.log("Frequency of %d = %d\n", A[i], Frequency);
}