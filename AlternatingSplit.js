function encrypt(text, n) {
    
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
    const idxOdd = [];
    const idxEven = [];
    const original = [];
    const input = encryptedText.split('');

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) idxOdd.push(i);
        if (i % 2 === 0) idxEven.push(i);
    }

    const idxResult = idxOdd.concat(idxEven);
    console.log(idxResult);

    

   
};

console.log(encrypt("This is a test!", 1));
console.log(decrypt("hsi  etTi sats!", 1));