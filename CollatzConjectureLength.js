function collatz(n) {

    const resultArr = [n,];

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
            resultArr.push(n);
        } else {
            n = (n * 3) + 1;
            resultArr.push(n);
        }
    }
    return resultArr.length;
};

console.log(collatz(20));