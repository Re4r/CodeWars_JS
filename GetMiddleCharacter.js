function getMiddle(s) {
    const output = s.split('');

    if (output.length === 1) {
        return output.join('');
    } else if (output.length % 2 === 0) {
        let middleEven = output[output.length / 2 - 1] + output[output.length / 2];
        return middleEven;
    } else {
        let middleOdd = output[Math.floor(output.length / 2)];
        return middleOdd;
    }
};

console.log(getMiddle('test'));