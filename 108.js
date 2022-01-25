// Primes Using foreach
let Arr = [10, 2, 3, 4, 1, 1, 6, 9, 7, 88, 97, 57];

Arr.forEach((index) => {
    let check = 0;
    for (let i = 2; i < index; i++) {
        if (index % i == 0) {
            check = 1;
            break;
        }
    }
    if (check == 0) {
        console.log(index);
    }
})