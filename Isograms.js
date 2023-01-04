function isIsogram(str) {
    const isogObj = {};
    const isogArray = str.toLowerCase().split('');
    
    for (let item of isogArray) {
        isogObj[item] === undefined ? isogObj[item] = 0 : isogObj[item] = 1;
    }

    const arrOfValues = Object.values(isogObj);

    return arrOfValues.every((item) => item === 0);
};

console.log(isIsogram("Dermatoglyphics"));