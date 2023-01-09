function calculateYears(principal, interest, tax, desired) {
    
    let investYears = 0;
    
    while (principal < desired) {
        principal = principal + ((principal * interest) - ((principal * interest) * tax));
        investYears++;
    }
    return investYears;
};

console.log(calculateYears(1000, 0.05, 0.18, 1100));