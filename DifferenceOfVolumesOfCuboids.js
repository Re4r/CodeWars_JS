function findDifference(a, b) {
    const paramA = a.reduce((acc, item) => acc * item);
    const paramB = b.reduce((acc, item) => acc * item);
    return Math.max(paramA, paramB) - Math.min(paramA, paramB);
};

console.log(findDifference([3, 2, 5], [1, 4, 4]));