function mergeArrays(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) {
        return [];
    } else {
        return Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)));
    }
};

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));