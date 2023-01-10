function encrypt(text, n) {

    if (text === '' || text === null) return text;
    if (n === 0) return text;
    
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

        input = outputOdd.concat(outputEven);
        counter++;
    }
    return input.join('');
};

function decrypt(encryptedText, n) {

    if (encryptedText === '' || encryptedText === null) return encryptedText;
    if (n === 0) return encryptedText;
    
    let input = encryptedText.split('');
    let counter = 0;
    let idxResult = [];
    
    while (counter < n) {
        const idxOdd = [];
        const idxEven = [];
        const original = [];

        for (let i = 0; i < input.length; i++) {
            if (i % 2 !== 0) idxOdd.push(i);
            if (i % 2 === 0) idxEven.push(i);
        }

        idxResult = idxOdd.concat(idxEven);

        for (let i = 0; i < input.length; i++) {
            original[i] = input[idxResult.indexOf(i)];
        }
        input = original;
        counter++;
    }    
    return input.join('');
};

console.log(encrypt("Kobayashi-Maru-Test", 5));
console.log(decrypt("oaah-auTsKbysiMr-et", 1));