function high(x) {

    const firstArr = x.toLowerCase().split(' ');
    const sumArr = [];

    for (let elem of firstArr) {
        const sum = elem.split('').reduce((acc, item) => {
            return acc += item.charCodeAt() - 96;
        }, 0);
        sumArr.push(sum);
    }
    
    let maxValueIndex = sumArr.indexOf(Math.max(...sumArr));

    return firstArr[maxValueIndex];
};

console.log(high("jjfyjshzesh cmalxorvkm udxumzxsyp zxyzvwclor"));