function maskify(cc) {

    if (cc === '') return '';
    if (cc.length <= 4) return cc;

    const maskArr = cc.split('');
    for (let i = 0; i < maskArr.length - 4; i++) {
        maskArr[i] = '#';
    }
    return maskArr.join('');
};

console.log(maskify('4556364607935616'));