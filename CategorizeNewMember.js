function openOrSenior(data) {
    const result = [];

    for (item of data) {
        if (item[0] >= 55 && item[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }
    return result;
};

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));