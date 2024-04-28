console.log("sum range:")
const sumRange = (num) => {
    if(num == 0){
        return 0;
    }
    return num + sumRange(num-1)
};
console.log(sumRange(10));

console.log("power:")
const power = (base, exponent) => {
    if (exponent == 0){
        return 1
    }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3))

console.log("factorial:")
const factorial =  (num) => {
    if (num == 0){
        return 1
    }
    return num * factorial(num - 1)
};
console.log(factorial(5));

console.log("product of array:")
const productOfArray = (arr) => {
    if(arr.length === 0) {
        return 1
    }
    return arr.shift() * productOfArray(arr);
}
console.log(productOfArray([1, 4, 5, 10]));

console.log("sumSquares")
const sumSquares = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && arr[i] !== null) {
            total += sumSquares(arr[i]);
        } else {
            total += arr[i] * arr[i];
        }

    }
    return total;
}

console.log(sumSquares([[4, 4], [2, 4, 5, [3]]]));