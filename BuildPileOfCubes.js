function findNB(m) {
    let numberOfCubes = 1;
    let check = 0;

    while (check <= m) {
        check += Math.pow(numberOfCubes, 3);
        if (check === m) return numberOfCubes;
        numberOfCubes++;
    }
    return -1;
};

console.log(findNB(1071225));