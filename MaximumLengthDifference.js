function maximumLengthDifference(a1, a2) {

    if (a1.length === 0 || a2.length === 0) {
        return -1;
    } else {
        const lengthArray1 = a1.map((item) => item.length);
        const lengthArray2 = a2.map((item) => item.length);

        let maxValue1 = Math.max(...lengthArray1);
        let minValue1 = Math.min(...lengthArray1);
        let maxValue2 = Math.max(...lengthArray2);
        let minValue2 = Math.min(...lengthArray2);

        let diff1 = maxValue1 - minValue2;
        let diff2 = maxValue2 - minValue1;

        if (diff1 > diff2) {
            return diff1;
        } else {
            return diff2;
        }
    }
};

const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(maximumLengthDifference(a1, a2));