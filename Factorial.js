function factorial(n) {
    let mult = 1;
    for (let i = 1; i <= n; i++) {
        mult *= i;
    }
    return mult;
};

console.log(factorial(4));