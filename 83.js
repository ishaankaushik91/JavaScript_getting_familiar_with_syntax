function asPercentage(value, total) {
    if (total === 0) {
        return 0;
    }
    return (value / total) * 100;
}
var result = asPercentage(20, 40);
console.log(result);