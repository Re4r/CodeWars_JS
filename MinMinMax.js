function minMinMax(n) {

    let minValue = Math.min(...n);
    let maxValue = Math.max(...n);
    let minimumAbsent = 0;
    
    for (let i = minValue; i <= maxValue; i++) {
        if (!n.includes(i)) {
            minimumAbsent = i;
            break;
        }
    }
    
    return [minValue, minimumAbsent, maxValue];
};

console.log(minMinMax([-1, 4, 5, -23, 24]));