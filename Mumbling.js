function accum(s) {
    const result2 = [];
    const result = [];
    const input = s.split('');
    //console.log(input);

    for (let i = 0; i < input.length; i++) {
        let multi = input[i].repeat(i + 1);
        const multiArr = multi.split('');  
        result.push(multiArr);
    }

    for (let elem of result) {
        elem[0] === elem[0].toUpperCase() ? elem[0] : elem[0] = elem[0].toUpperCase();
        //console.log(elem[0]);
    }

    for (let item of result) {
        for (let j = 1; j < item.length; j++) {
            item[j] === item[j].toLowerCase() ? item[j] : item[j] = item[j].toLowerCase();
        }
    }

    for (let elem of result) {
        let y = elem.join('');
        result2.push(y);
    }
    return result2.join('-');
};

console.log(accum("ZpglnRxqenU"));