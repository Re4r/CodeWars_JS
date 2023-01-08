function countConsonants(str) {

    let counter = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    const uniqValues = [...new Set(str.toLowerCase())].filter((x) => x.match(/[a-z]/));
    
    uniqValues.forEach((item) => {!vowels.includes(item) ? counter++ : counter;});

    return counter;
};

console.log(countConsonants("3JY51"));