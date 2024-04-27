const sumRange = (num) => {
    if(num == 0){
        return 0;
    }
    return num + sumRange(num-1)
};
console.log(sumRange(10));

const power = (base, exponent) => {
    if (exponent == 0){
        return 1
    }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3))

const factorial =  (num) => {
    if (num == 0){
        return 1
    }
    return num * factorial(num - 1)
};
console.log(factorial(5));