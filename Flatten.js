const flatten = function(array) {
    const flatArray = array.flat();
    return flatArray;
};

console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]));