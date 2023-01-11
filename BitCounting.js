const countBits = (n) => n.toString(2).split('').reduce((acc, item) => acc + parseInt(item), 0);
    
console.log(countBits(1234));