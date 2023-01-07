function sortArray(array) {
    const oddValue = array.filter((item) => item % 2).sort((a, b) => a - b);
    const sortedOddArr = array.map((item) => item % 2 ? oddValue.shift() : item);

    return sortedOddArr;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));