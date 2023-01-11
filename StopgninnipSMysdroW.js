function spinWords(str) {
    const input = str.split(' ');
    
    for (let i = 0; i < input.length; i++) {
        if (input[i].length >= 5) {
            input[i] = input[i].split('').reverse().join('');
        }
    }

    return input.join(' ');
};

console.log(spinWords("Hey fellow warriors"));