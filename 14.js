// Sum of all elements in Array (Loop)
let A = [], Sum = 0;

for (let i = 0; i <= 100; i++) {
    A[i] = i * 2;
    Sum += A[i];
}
console.log("%d\n", Sum);