function duplicateEncode(word) {
    const input = word.toLowerCase().split('');
    const inputObj = {};
    const output = [];

    for (let item of input) {
        if (inputObj[item] === undefined) {
            inputObj[item] = 0;
        } else {
            inputObj[item] = 1;
        }
    }

    for (let element of input) {
        if (inputObj[element] === 0) output.push('(');
        if (inputObj[element] === 1) output.push(')');
    }
    return output.join('');
};

console.log(duplicateEncode("recede"));