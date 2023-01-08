function cyclops(n) {
    const binary = n.toString(2);
    let numberOfZero = 0;

    for (let elem of binary) {
        if (elem === '0') numberOfZero++;
    }
    
    const sequenceLength = binary.length;
    const middleElement = binary[Math.floor(sequenceLength / 2)];

    return sequenceLength % 2 && middleElement === '0' && numberOfZero === 1 ? true : false;
};

console.log(cyclops(26));