function persistence(num) {
    
    let counter = 0;
    
    while (num.toString().length !== 1) {
        num = num.toString().split('').reduce((acc, item) => acc * item);
        counter++;
    }
    return counter;
};

console.log(persistence(999));