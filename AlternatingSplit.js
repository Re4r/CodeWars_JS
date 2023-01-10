function encrypt(text, n) {

    if (text === '' || text === null) return text;
    
    let input = text.split('');
    let counter = 0;
    //console.log(input);

    while (counter < n) {
        const outputOdd = [];
        const outputEven = [];

        for (let i = 0; i < input.length; i++) {
            if (i % 2 !== 0) outputOdd.push(input[i]);
            if (i % 2 === 0) outputEven.push(input[i]);
        }

        //console.log(outputOdd.join(''));
        //console.log(outputEven.join(''));

        input = outputOdd.concat(outputEven);
        counter++;
    }
    return input.join('');
};

function decrypt(encryptedText, n) {

    if (encryptedText === '' || encryptedText === null) return text;
    
    const original = [];
    let input = encryptedText.split('');
    let counter = 0;
    let idxResult = [];
    
    while (counter < n) {
        const idxOdd = [];
        const idxEven = [];

        for (let i = 0; i < input.length; i++) {
            if (i % 2 !== 0) idxOdd.push(i);
            if (i % 2 === 0) idxEven.push(i);
        }

        idxResult = idxOdd.concat(idxEven);

        for (let i = 0; i < input.length; i++) {
            original[i] = input[idxResult.indexOf(i)];
        }
        counter++;
    }    
    return original.join('');
};

console.log(encrypt("This is a test!", 3));
console.log(decrypt("hsi  etTi sats!", 3));