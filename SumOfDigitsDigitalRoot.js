function digitalRoot(n) {
    const arrOfDigits = n.toString().split('');
    console.log(arrOfDigits);
    
    const sum = arrOfDigits.reduce((acc, item) => {
        return acc += parseInt(item);
    }, 0);

    return sum.toString().split('').length !== 1 ? digitalRoot(sum) : sum;
};

console.log(digitalRoot(1234567895678567891));