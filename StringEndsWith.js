function stringEndsWith(str, ending) {
    let lastSymbols = str.substring(str.length - ending.length);
    return lastSymbols === ending;
};

console.log(stringEndsWith('abcde', 'abc'));