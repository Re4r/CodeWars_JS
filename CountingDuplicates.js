function duplicateCount(text) {
    if (text === '') return 0;
    const input = text.toLowerCase().split('');
    
    const storage = {};

    for (let key of input) {
        if (storage[key] === undefined) {
            storage[key] = 0;
        } else {
            storage[key] = 1;
        }
    }

    return Object.values(storage).reduce((acc, item) => acc + item);
};

console.log(duplicateCount("aabbcde"));