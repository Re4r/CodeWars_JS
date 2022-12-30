function countPositivesSumNegatives(input) {

    let counterPositives = 0;
    let sumNegatives = 0;
    
    if (input === null || input.length < 1) {
        return [];
    } else {
        
        for (let i = 0; i < input.length; i++) {
            
            if (input[i] > 0) counterPositives++;
            if (input[i] < 0) sumNegatives += input[i]; 
        }
    }
    return [counterPositives, sumNegatives];
};

console.log(countPositivesSumNegatives([]));
