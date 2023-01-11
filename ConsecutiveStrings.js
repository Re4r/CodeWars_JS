function longestConsec(starr, k) {
    const output = [];

    if (starr.length === 0 || k > starr.length || k <= 0) return '';
    
    for (let i = 0; i < starr.length - k; i++) {
        let current = starr[i];
        for (let ii = k, jj = 1; ii > 1; ii--, jj++) {
            current += starr[i + jj];
        }
        output.push(current);
    }
    return output.reduce((a, b) => a.length > b.length ? a : a.length === b.length ? a : b);
};

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));